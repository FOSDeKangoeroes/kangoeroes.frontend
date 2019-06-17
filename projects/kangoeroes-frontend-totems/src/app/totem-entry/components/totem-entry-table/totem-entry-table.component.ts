import {
  Component,
  OnInit,
  ViewChild,
  Input,
  EventEmitter,
  Output,
  ElementRef
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TotemEntryTableDataSource } from './totem-entry-table-datasource';
import { BehaviorSubject } from 'rxjs';
import { TotemEntry } from '../../shared/totem-entry-model';
import { TotemEntryDataService } from '../../shared/totem-entry-data.service';
import { TotemEntryService } from '../../shared/totem-entry.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'totem-entry-table',
  templateUrl: './totem-entry-table.component.html',
  styleUrls: ['./totem-entry-table.component.scss']
})
export class TotemEntryTableComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('entryContainer', { static: true }) tableContainer: ElementRef;
  dataSource: TotemEntryTableDataSource;

  @Input() searchString$: BehaviorSubject<string>;
  @Input() displayedColumns: string[];
  @Output() detail = new EventEmitter<TotemEntry>();

  constructor(
    private totemEntryDataService: TotemEntryDataService,
    private totemEntryService: TotemEntryService
  ) {}

  ngOnInit() {
    this.dataSource = new TotemEntryTableDataSource(
      this.paginator,
      this.sort,
      this.searchString$,
      this.totemEntryDataService,
      this.totemEntryService
    );

  }

  scrollToTop() {
    this.tableContainer.nativeElement.scrollTop = 0;
  }

}
