import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DataService } from '../../data.service';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Leiding } from '../leiding.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LeidingAddComponent } from '../leiding-add/leiding-add.component';





@Component({
  selector: 'app-leiding-list',
  templateUrl: './leiding-list.component.html',
  styleUrls: ['./leiding-list.component.scss']
})
export class LeidingListComponent implements OnInit, AfterViewInit {

  dataSource = new MatTableDataSource();
  displayedColumns = ['voornaam', 'naam', 'authId', 'email', 'leidingSinds', 'datumGestopt'];

  @ViewChild(MatSort) sort: MatSort;

  public addModal: BsModalRef;

  constructor(private dataService: DataService, private modalService: BsModalService) {
    this.dataService.getLeiding().subscribe(res => {
      this.dataSource.data = res;
    });
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  openAddModal() {
    this.addModal = this.modalService.show(LeidingAddComponent);
  }

}

