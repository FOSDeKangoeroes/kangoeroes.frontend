import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DierenTableDataSource } from './dieren-table-datasource';
import { AnimalDataService } from '../../shared/animal-data.service';
import { BehaviorSubject } from 'rxjs';
import { AnimalService } from '../../shared/animal.service';
import { Animal } from '../../shared/animal.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dieren-table',
  templateUrl: './dieren-table.component.html',
  styleUrls: ['./dieren-table.component.css']
})
export class DierenTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DierenTableDataSource;

  @Input() searchString$: BehaviorSubject<string>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  @Input() displayedColumns: string[];

  @Output() edit = new EventEmitter<Animal>();

  constructor(
    private animalDataService: AnimalDataService,
    private animalService: AnimalService) {

  }

  ngOnInit() {
    this.dataSource = new DierenTableDataSource(this.paginator, this.sort, this.searchString$, this.animalDataService, this.animalService);
  }

  editAnimal(animal: Animal) {
    this.edit.emit(animal);
  }
}
