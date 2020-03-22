
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { TitleService } from '../../../core/title/title.service';
import { ColumnService } from '../../../core/title/column.service';
import { PickColumnDialogComponent } from '../../../ui/pick-column/totemanimal-pick-column-dialog/pick-column-dialog.component';
import { Leiding } from '../../../leiding/leiding.model';

import { Router } from '@angular/router';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { TotemEntryAddComponent } from '../../components/totem-entry-add/totem-entry-add.component';
import { shareReplay, map } from 'rxjs/operators';

@Component({
  selector: 'app-totem-entries',
  templateUrl: './totem-entries.component.html',
  styleUrls: ['./totem-entries.component.scss']
})
export class TotemEntriesComponent implements OnInit {
  searchString$ = new BehaviorSubject<string>('');

  displayedColumns = [];

  possibleColumns = [
    'leiding.voornaam',
    'adjectief.naam',
    'totem.naam',
    'datumGegeven',
    'voorouder.adjectief.naam',
    'reuseDateTotem',
    'reuseDateAdjectief',
    'acties'
  ];
  leiding: Leiding[];
  totalLeidingCount: number;
  leidingSearch$ = new Subject<string>();
  private readonly COLUMN_KEY = 'totem-entries-columns';

  $isHandSet: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay());

  constructor(
    public titleService: TitleService,
    private columnService: ColumnService,
    private dialog: MatDialog,
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {
    this.titleService.setTitle('Getotemiseerden');
  }

  ngOnInit() {
    this.initializeColumns();
  }

  private initializeColumns() {
    if (!this.columnService.itemIsInStorage(this.COLUMN_KEY)) {
      this.columnService.setDisplayedColumns(
        this.COLUMN_KEY,
        this.possibleColumns
      );
    }
    this.displayedColumns = this.columnService.getDisplayedColumns(
      this.COLUMN_KEY
    );
  }

  applyFilter(value: string) {
    this.searchString$.next(value);
  }

  openDialog() {
    const dialogRef = this.dialog.open(PickColumnDialogComponent, {
      width: '500px',
      data: {
        possibleColumns: this.possibleColumns,
        selectedColumns: this.displayedColumns
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        // Sort the returned selection on the original column order.
        result.sort((a, b) => {
          return (
            this.possibleColumns.indexOf(a) - this.possibleColumns.indexOf(b)
          );
        });

        // Set the displayed columns and save them to local storage for further use
        this.displayedColumns = result;
        this.columnService.setDisplayedColumns(
          this.COLUMN_KEY,
          this.displayedColumns
        );
      }
    });
  }

  detail(event) {
  this.router.navigate(['totems', event.id]);
  }

  openAdd() {
    const addDialog = this.dialog.open(TotemEntryAddComponent);
  }
}
