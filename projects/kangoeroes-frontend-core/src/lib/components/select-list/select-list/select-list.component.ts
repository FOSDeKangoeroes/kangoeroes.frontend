
import { HttpHeaders } from '@angular/common/http';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, OnInit, Input, ViewChild, forwardRef } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
import { NgSelectComponent } from '@ng-select/ng-select';
import { Resource } from 'projects/kangoeroes-frontend-core/src/lib/data-service/resource-model';
import { ResourceService } from 'projects/kangoeroes-frontend-core/src/lib/data-service/resource-service';
import { ResourceFactory } from 'projects/kangoeroes-frontend-core/src/lib/data-service/resource-factory';
import { QueryOptions } from 'projects/kangoeroes-frontend-core/src/lib/data-service/query-options';
import { Pagination } from 'projects/kangoeroes-frontend-leidingbeheer/src/app/models/pagination-model';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.scss'],
  providers: [
    {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectListComponent),
    multi: true
    }
  ]
})
export class SelectListComponent<T extends Resource> implements OnInit, ControlValueAccessor {

  @Input() placeholder: string;
  @Input() dataService: ResourceService<T>;
  @Input() resourceFactory: ResourceFactory<T>;

  @ViewChild('selectList') selectList: NgSelectComponent;


  list: T[];
  queryOptions = new QueryOptions();
  paginationData: Pagination;
  search$ = new Subject<string>();
  loading = false;

  constructor() {

  }

  ngOnInit() {

    this.loadLeiding();
    this.searchLeiding();
  }

  registerOnChange(fn: any): void {
    this.selectList.registerOnChange(fn);
  }

  registerOnTouched(fn: any): void {
    this.selectList.registerOnTouched(fn);
  }

  setDisabledState(isDisabled: boolean): void {
    this.selectList.setDisabledState(isDisabled);
  }

  writeValue(obj: any): void {
    this.selectList.writeValue(obj);
  }

  loadLeiding() {
    this.loading = true;
    this.dataService.list(this.queryOptions).subscribe(data => {
      this.list = data.body;
      this.paginationData = this.parseHeaders(data.headers);
      this.loading = false;
    });
  }

  fetchMore() {
    if (this.list.length < this.paginationData.totalCount) {
       this.loading = true;
    this.queryOptions.pageNumber++;
    this.dataService.list(this.queryOptions).subscribe(data => {
      this.list = this.list.concat(data.body);
      this.paginationData = this.parseHeaders(data.headers);
      this.loading = false;
    });
    }

  }

  searchLeiding() {
     this.search$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(res => {
        this.queryOptions.pageNumber = 1;
        this.queryOptions.query = res;
        this.loading = true;
        return this.dataService.list(this.queryOptions);
      }),
      map(data => {
        this.list = data.body;
        this.paginationData = this.parseHeaders(data.headers);
        this.loading = false;
      })
    ).subscribe();
  }

  add(searchTerm: string) {
    this.loading = true;
    this.selectList.close();

   const result = this.resourceFactory.create(searchTerm);
   this.dataService.create(result).subscribe(() => {
     this.list.push(result);

    this.loading = false;
   });
  }

  private parseHeaders(headers: HttpHeaders): Pagination {
    return JSON.parse(headers.get('X-Pagination'));
  }
}
