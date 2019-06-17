import { DataSource } from '@angular/cdk/collections';
import { Leiding } from '../../../shared/leiding.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { LeidingDataService } from '../../../shared/leiding-data.service';
import { debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
import { LeidingService } from '../../../shared/leiding.service';
import { SearchBarService } from 'projects/kangoeroes-frontend-core/src/lib/components/search-bar/search-bar.service';
import { Subscription, Observable, merge } from 'rxjs';
import { LeidingQueryOptions } from '../../../shared/leiding-query-options';


export class LeidingTableDataSource extends DataSource<Leiding> {

    data: Leiding[];
    private searchString: string;
    totalLength: number;
    private serviceSubscription: Subscription;


    constructor(
        private paginator: MatPaginator,
        private sort: MatSort,
        private searchBarService: SearchBarService,
        private leidingDataService: LeidingDataService,
        private eventService: LeidingService,
        private takId?: number
    ) {
        super();
        this.serviceSubscription = this.searchBarService.searchString$.subscribe(res => {
            this.searchString = res;
            this.paginator.pageIndex = 0;
        });
}

    connect(): Observable<Leiding[]> {
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        const dataMutations = [
            this.paginator.page,
            this.sort.sortChange,
            this.searchBarService.searchString$.pipe(debounceTime(200), distinctUntilChanged()),
            this.eventService.entryChanged$
        ];

        return merge(...dataMutations).pipe(
            switchMap(() => {
                const options = new LeidingQueryOptions();
                options.takId = this.takId;
                options.pageNumber = this.paginator.pageIndex + 1;
                options.pageSize = this.paginator.pageSize;
                options.query = this.searchString;
                options.sortBy = this.sort.active;
                options.sortOrder = this.sort.direction;
                return this.leidingDataService.list(options);
            }),
            map(data => {
                const headers = JSON.parse(data.headers.get('X-Pagination'));
                this.paginator.pageSize = headers.pageSize;
                this.totalLength = headers.totalCount;
                return data.body;
            })
        );
    }

    disconnect() {
        this.serviceSubscription.unsubscribe();
    }

}
