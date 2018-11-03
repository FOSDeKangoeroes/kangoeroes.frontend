
import { HttpHeaders } from '@angular/common/http';

import { FormGroup, FormControlName, AbstractControl, FormBuilder, FormControl, ValidationErrors } from '@angular/forms';
import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';

import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';

import { NgSelectComponent } from '@ng-select/ng-select';
import { Resource } from 'projects/kangoeroes-frontend-core/src/lib/core-data-service/resource-model';
import { ResourceService } from 'projects/kangoeroes-frontend-core/src/lib/core-data-service/resource-service';
import { ResourceFactory } from 'projects/kangoeroes-frontend-core/src/lib/core-data-service/resource-factory';
import { QueryOptions } from 'projects/kangoeroes-frontend-core/src/lib/core-data-service/query-options';
import { Pagination } from 'projects/kangoeroes-frontend-leidingbeheer/src/app/models/pagination-model';


@Component({
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.scss']
})
export class SelectListComponent<T extends Resource> implements OnInit {
  formGroup: FormGroup;
  @Input() placeholder: string;
  @Input() dataService: ResourceService<T>;
  @Input() value: number;
  @Output() formReady = new EventEmitter<FormGroup>();
  @Input() validation: ((control: AbstractControl) => ValidationErrors)[];
  @Input() resourceFactory: ResourceFactory<T>;

  @ViewChild('selectList') selectList: NgSelectComponent;


  list: T[];
  queryOptions = new QueryOptions();
  paginationData: Pagination;
  search$ = new Subject<string>();
  loading = false;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.formGroup = this.fb.group({

      control: [, this.validation]
    });
    this.formReady.emit(this.formGroup);
    this.loadLeiding();
    this.searchLeiding();
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
   this.dataService.create(result).subscribe(res => {
    this.loading = false;
   });
  }

  private parseHeaders(headers: HttpHeaders): Pagination {
    return JSON.parse(headers.get('X-Pagination'));
  }
}
