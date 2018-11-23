import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../../services/data.service';
import { Tak } from '../../tak/shared/tak.model';
import { QueryOptions } from 'projects/kangoeroes-frontend-core/src/lib/data-service/query-options';
import { TakDataService } from '../../tak/shared/tak-data.service';




export class TakDataSource implements DataSource<Tak> {

    private takSubject = new BehaviorSubject<Tak[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    totalLength: number;

    public loading$ = this.loadingSubject.asObservable();

    constructor(private dataService: TakDataService) { }

    connect(collectionViewer: CollectionViewer): Observable<Tak[]> {
        return this.takSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.takSubject.complete();
        this.loadingSubject.complete();
    }

    loadTakken(sortBy = 'naam', sortOrder = 'asc', filter = '', pageSize = 25, pageIndex = 0) {
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

                this.takSubject.next(res.body);
                this.loadingSubject.next(false);
            }
            );
    }
}
