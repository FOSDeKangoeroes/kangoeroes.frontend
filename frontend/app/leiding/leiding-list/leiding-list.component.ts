import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DataService } from '../../data.service';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Leiding } from '../leiding.model';




@Component({
  selector: 'app-leiding-list',
  templateUrl: './leiding-list.component.html',
  styleUrls: ['./leiding-list.component.scss']
})
export class LeidingListComponent implements OnInit, AfterViewInit {

  dataSource = new MatTableDataSource();
  displayedColumns = ['voornaam', 'naam', 'authId', 'email', 'leidingSinds', 'datumGestopt'];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private dataService: DataService) { 
    this.dataService.getLeiding().subscribe(res => {
      this.dataSource.data = res;
    });
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}

