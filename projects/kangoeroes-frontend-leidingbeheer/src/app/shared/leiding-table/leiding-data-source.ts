import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Leiding } from '../../leiding/shared/leiding.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Observable } from 'rxjs/Observable';
import { DataService } from '../../services/data.service';
import { LeidingDataService } from '../../leiding/shared/leiding-data.service';
import { QueryOptions } from 'projects/kangoeroes-frontend-core/src/lib/data-service/query-options';




export class LeidingDataSource implements DataSource<Leiding> {

    private leidingSubject = new BehaviorSubject<Leiding[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    totalLength: number;

    public loading$ = this.loadingSubject.asObservable();

    constructor(private dataService: LeidingDataService) { }

    connect(collectionViewer: CollectionViewer): Observable<Leiding[]> {
    return this.leidingSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
     this.leidingSubject.complete();
     this.loadingSubject.complete();
    }

    loadLeiding(sortBy = 'naam', sortOrder = 'asc', filter = '', tak = 0, pageSize = 25, pageIndex = 0) {
    this.loadingSubject.next(true);
        const queryOptions = new QueryOptions();

        queryOptions.pageNumber = pageIndex + 1;
        queryOptions.pageSize = pageSize;
        queryOptions.sortBy = sortBy;
        queryOptions.sortOrder = sortOrder;
    this.dataService.list(queryOptions)
    .subscribe(res => {

        const headers = JSON.parse(res.headers.get('X-Pagination'));
        this.totalLength = headers.totalCount;

        this.leidingSubject.next(res.body);
        this.loadingSubject.next(false);
    }
    );
    }
}
