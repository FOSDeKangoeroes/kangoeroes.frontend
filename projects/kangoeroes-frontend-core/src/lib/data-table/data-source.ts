import { DataSource } from '@angular/cdk/table';
import { Observable, Subscription, merge } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SearchBarService } from '../components/search-bar/search-bar.service';
import { ResourceService } from '../data-service/resource-service';
import { Resource } from '../data-service/resource-model';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  map
} from 'rxjs/operators';
import { QueryOptions, ParentEntity } from '../data-service/query-options';
import { EventService } from './event.service';

// Service van maken?
export class KangoeroeTableDataSource<T extends Resource> extends DataSource<
  T
> {
  data: T[];
  private searchString: string;
  totalLength: number;
  private serviceSubscription: Subscription;
  public parentEntity?: ParentEntity;

  constructor(
    protected paginator: MatPaginator,
    protected sort: MatSort,
    protected searchBarService: SearchBarService,
    protected dataService: ResourceService<T>,
    protected eventService: EventService
  ) {
    super();
    this.serviceSubscription = this.searchBarService.searchString$.subscribe(
      res => {
        this.searchString = res;
        this.paginator.pageIndex = 0;
      }
    );
  }

  connect(): Observable<T[]> {
    const dataMutations = [
      this.paginator.page,
      this.sort.sortChange,
      this.searchBarService.searchString$.pipe(
        debounceTime(200),
        distinctUntilChanged()
      ),
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

        if (this.parentEntity) {
          options.parentEntity = this.parentEntity;
        }
        return this.dataService.list(options);
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
