import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';

import { debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';

import { SearchBarService } from 'projects/kangoeroes-frontend-core/src/lib/components/search-bar/search-bar.service';
import { Subscription, Observable, merge } from 'rxjs';
import { TakDataService } from '../../shared/tak-data.service';
import { Tak } from '../../shared/tak.model';
import { QueryOptions } from 'projects/kangoeroes-frontend-core/src/lib/data-service/query-options';
import { TakService } from '../../shared/tak.service';


export class TakTableDataSource extends DataSource<Tak> {

    data: Tak[];
    private searchString: string;
    totalLength: number;
    private serviceSubscription: Subscription;


    constructor(
        private paginator: MatPaginator,
        private sort: MatSort,
        private searchBarService: SearchBarService,
        private leidingDataService: TakDataService,
        private eventService: TakService,
    ) {
        super();
        this.serviceSubscription = this.searchBarService.searchString$.subscribe(res => {
            this.searchString = res;
            this.paginator.pageIndex = 0;
        });
    }

    connect(): Observable<Tak[]> {
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
