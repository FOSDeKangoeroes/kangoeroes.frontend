import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DataService } from '../../data.service';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Leiding } from '../leiding.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LeidingAddComponent } from '../leiding-add/leiding-add.component';
import { SelectionModel } from '@angular/cdk/collections';





@Component({
  selector: 'app-leiding-list',
  templateUrl: './leiding-list.component.html',
  styleUrls: ['./leiding-list.component.scss']
})
export class LeidingListComponent implements OnInit, AfterViewInit {

  dataSource = new MatTableDataSource<Leiding>();
  displayedColumns = ['select', 'voornaam', 'naam', 'authId', 'email', 'leidingSinds', 'datumGestopt'];

  @ViewChild(MatSort) sort: MatSort;

 selection = new SelectionModel<Leiding>(true, []);


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

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
  }

}

