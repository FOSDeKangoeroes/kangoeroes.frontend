import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { DataService } from '../../data.service';
import { Observable } from 'rxjs/Observable';
import { MatSort } from '@angular/material';



@Component({
  selector: 'app-leiding-list',
  templateUrl: './leiding-list.component.html',
  styleUrls: ['./leiding-list.component.scss']
})
export class LeidingListComponent implements OnInit, AfterViewInit {

  private _dataSource: LeidingDataSource;
  displayedColumns = ['naam', 'authId', 'email', 'leidingSinds', 'datumGestopt'];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this._dataSource = new LeidingDataSource(this.dataService);
  }
  ngAfterViewInit() {
    this._dataSource.sort = this.sort;
  }

  get dataSource() {
    return this._dataSource;
  }

}

export class LeidingDataSource extends DataSource<any> {
  constructor(private dataService: DataService) {
    super();
  }
  sort: MatSort;
  connect(collectionViewer: CollectionViewer): Observable<any[]> {
    return this.dataService.getLeiding();
  }
  disconnect(collectionViewer: CollectionViewer): void { }



}
