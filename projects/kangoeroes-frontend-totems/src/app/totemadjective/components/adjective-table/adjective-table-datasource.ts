
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Observable, of as observableOf, merge, BehaviorSubject } from 'rxjs';
import { Adjective } from '../../shared/adjective.model';
import { TotemAdjectiveDataService } from '../../shared/totem-adjective-data.service';
import { AdjectiveService } from '../../shared/adjective.service';
import { QueryOptions } from 'projects/kangoeroes-frontend-core/src/lib/data-service/query-options';


/**
 * Data source for the AdjectiveTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class AdjectiveTableDataSource extends DataSource<Adjective> {
  data: Adjective[];
  private searchString;
  totalLength: number;

  constructor(
    private paginator: MatPaginator,
    private sort: MatSort,
  private searchString$: BehaviorSubject<string>,
private adjectiveDataService: TotemAdjectiveDataService,
private adjectiveService: AdjectiveService) {
    super();
    this.searchString$.subscribe(res => {
      this.searchString = res;
      this.paginator.pageIndex = 0;
    });
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Adjective[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      this.paginator.page,
      this.sort.sortChange,
      this.searchString$.pipe(debounceTime(200), distinctUntilChanged()),
      this.adjectiveService.adjectiveChanged$,
      this.adjectiveService.newAdjective$
    ];


    return merge(...dataMutations).pipe(

      switchMap(() => {
        const options = new QueryOptions();
        options.pageNumber = this.paginator.pageIndex + 1;
        options.pageSize = this.paginator.pageSize;
        options.query = this.searchString;
        options.sortBy = this.sort.active;
        options.sortOrder = this.sort.direction;
        return this.adjectiveDataService
          .list(
            options);
      }
      ),
      map(data => {
        const headers = JSON.parse(data.headers.get('X-Pagination'));
        this.paginator.pageSize = headers.pageSize;
        this.totalLength = headers.totalCount;
        return data.body;
      })

    );
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

}


