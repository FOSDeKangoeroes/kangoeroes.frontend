import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Leiding } from '../../leiding/shared/leiding.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Observable } from 'rxjs/Observable';
import { catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { DataService } from '../../services/data.service';
import { HttpResponse } from '@angular/common/http';



export class LeidingDataSource implements DataSource<Leiding> {

    private leidingSubject = new BehaviorSubject<Leiding[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    totalLength: number;

    public loading$ = this.loadingSubject.asObservable();

    constructor(private dataService: DataService) { }

    connect(collectionViewer: CollectionViewer): Observable<Leiding[]> {
    return this.leidingSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
     this.leidingSubject.complete();
     this.loadingSubject.complete();
    }

    loadLeiding(sortBy = 'naam', sortOrder = 'asc', filter = '', tak = 0, pageSize = 25, pageIndex = 0) {
    this.loadingSubject.next(true);
    this.dataService.getLeiding(sortBy, sortOrder, filter, tak, pageIndex + 1, pageSize)
    .subscribe(res => {

        const headers = JSON.parse(res.headers.get('X-Pagination'));
        this.totalLength = headers.totalCount;

        this.leidingSubject.next(res.body);
        this.loadingSubject.next(false);
    }
    );
    }
}
