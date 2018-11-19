import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../../services/data.service';
import { Tak } from '../../tak/shared/tak.model';




export class TakDataSource implements DataSource<Tak> {

    private takSubject = new BehaviorSubject<Tak[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    totalLength: number;

    public loading$ = this.loadingSubject.asObservable();

    constructor(private dataService: DataService) { }

    connect(collectionViewer: CollectionViewer): Observable<Tak[]> {
        return this.takSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.takSubject.complete();
        this.loadingSubject.complete();
    }

    loadTakken(sortBy = 'naam', sortOrder = 'asc', filter = '', pageSize = 25, pageIndex = 0) {
        this.loadingSubject.next(true);
        this.dataService.getTakken(sortBy, sortOrder, filter, pageSize, pageIndex + 1)
            .subscribe(res => {

                const headers = JSON.parse(res.headers.get('X-Pagination'));
                this.totalLength = headers.totalCount;

                this.takSubject.next(res.body);
                this.loadingSubject.next(false);
            }
            );
    }
}
