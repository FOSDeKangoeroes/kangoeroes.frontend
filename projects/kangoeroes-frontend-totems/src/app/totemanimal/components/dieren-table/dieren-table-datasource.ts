
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map, startWith, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Observable, of as observableOf, merge, BehaviorSubject } from 'rxjs';
import { Animal } from '../../shared/animal.model';
import { AnimalDataService } from '../../shared/animal-data.service';
import { AnimalService } from '../../shared/animal.service';
import { QueryOptions } from 'projects/kangoeroes-frontend-core/src/lib/core-data-service/query-options';


/**
 * Data source for the DierenTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DierenTableDataSource extends DataSource<Animal> {
  data: Animal[];
  totalLength: number;
  private searchString;


  constructor(
    private paginator: MatPaginator,
    private sort: MatSort,
    private searchString$: BehaviorSubject<string>,
    private animalDataService: AnimalDataService,
  private animalService: AnimalService) {
    super();
    this.searchString$.subscribe(res => {
      this.searchString = res;
      this.paginator.pageIndex = 0;
    } );
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Animal[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      this.paginator.page,
      this.sort.sortChange,
      this.searchString$.pipe(debounceTime(200), distinctUntilChanged()),
      this.animalService.newAnimal$
    ];

    return merge(...dataMutations).pipe(

      switchMap(() => {
        const options = new QueryOptions();
        options.sortOrder = this.sort.direction;
        options.sortBy = this.sort.active;
        options.query = this.searchString;
        options.pageSize = this.paginator.pageSize;
        options.pageNumber = this.paginator.pageIndex + 1;
       return this.animalDataService
          .list(options);
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
