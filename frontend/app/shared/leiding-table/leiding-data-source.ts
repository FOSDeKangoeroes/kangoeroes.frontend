import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Leiding } from '../../leiding/leiding.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataService } from '../../data.service';
import { Observable } from 'rxjs/Observable';
import { query } from '@angular/core/src/animation/dsl';
import { catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';


export class LeidingDataSource implements DataSource<Leiding> {

    private leidingSubject = new BehaviorSubject<Leiding[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private dataService: DataService) { }

    connect(collectionViewer: CollectionViewer): Observable<Leiding[]> {
    return this.leidingSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
     this.leidingSubject.complete();
     this.loadingSubject.complete();
    }

    loadLeiding(sortBy = '', sortOrder = 'asc', filter = '') {
    this.loadingSubject.next(true);
    this.dataService.getLeiding(sortBy, sortOrder, filter)
        .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
        )
    .subscribe(res => this.leidingSubject.next(res));
    }
}
