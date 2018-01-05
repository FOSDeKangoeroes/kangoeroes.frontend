import { Component, OnInit } from '@angular/core';
import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { DataService } from '../../data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-leiding-list',
  templateUrl: './leiding-list.component.html',
  styleUrls: ['./leiding-list.component.scss']
})
export class LeidingListComponent implements OnInit {

  private _dataSource: LeidingDataSource;
  displayedColumns = ['naam', 'authId', 'email', 'leidingSinds', 'datumGestopt'];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this._dataSource = new LeidingDataSource(this.dataService);
  }

  get dataSource() {
    return this._dataSource;
  }

}

export class LeidingDataSource extends DataSource<any> {
  constructor(private dataService: DataService) {
    super();
  }
  connect(collectionViewer: CollectionViewer): Observable<any[]> {
    return this.dataService.getLeiding();
  }
  disconnect(collectionViewer: CollectionViewer): void { }



}
