import { DataSource } from '@angular/cdk/collections';
import { Leiding } from '../../../shared/leiding.model';
import { MatPaginator, MatSort } from '@angular/material';
import { BehaviorSubject, Subscription, Observable, merge } from 'rxjs';
import { LeidingDataService } from '../../../shared/leiding-data.service';

import { debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
import { QueryOptions } from 'projects/kangoeroes-frontend-core/src/lib/data-service/query-options';
import { LeidingService } from '../../../shared/leiding.service';

export class LeidingTableDataSource extends DataSource<Leiding> {

    data: Leiding[];
    private searchString: string;
    totalLength: number;
    private serviceSubscription: Subscription;


    constructor(
        private paginator: MatPaginator,
        private sort: MatSort,
        private searchString$: BehaviorSubject<string>,
        private leidingDataService: LeidingDataService,
        private eventService: LeidingService
    ) {
        super();
        this.serviceSubscription = this.searchString$.subscribe(res => {
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
            this.searchString$.pipe(debounceTime(200), distinctUntilChanged()),
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
