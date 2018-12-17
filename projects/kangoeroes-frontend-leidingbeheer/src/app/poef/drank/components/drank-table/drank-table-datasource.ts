import { DataSource } from '@angular/cdk/table';
import { Drank } from '../../shared/drank.model';
import { Subscription, Observable, merge } from 'rxjs';
import { MatPaginator, MatSort } from '@angular/material';
import { SearchBarService } from 'projects/kangoeroes-frontend-core/src/lib/components/search-bar/search-bar.service';
import { debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
import { QueryOptions } from 'projects/kangoeroes-frontend-core/src/lib/data-service/query-options';
import { DrankDataService } from '../../shared/drank-data.service';
import { DrankService } from '../../shared/drank.service';
export class DrankTableDataSource extends DataSource<Drank> {

    data: Drank[];
    private searchString: string;
    totalLength: number;
    private serviceSubscription: Subscription;


    constructor(
        private paginator: MatPaginator,
        private sort: MatSort,
        private searchBarService: SearchBarService,
        private drankDataService: DrankDataService,
        private eventService: DrankService
    ) {
        super();
        this.serviceSubscription = this.searchBarService.searchString$.subscribe(res => {
            this.searchString = res;
            this.paginator.pageIndex = 0;
        });
    }

    connect(): Observable<Drank[]> {
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
                const options = new QueryOptions();
                options.pageNumber = this.paginator.pageIndex + 1;
                options.pageSize = this.paginator.pageSize;
                options.query = this.searchString;
                options.sortBy = this.sort.active;
                options.sortOrder = this.sort.direction;
                return this.drankDataService.list(options);
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
