import { ColumnService } from '../../../core/title/column.service';
import { Adjective } from '../../shared/adjective.model';
import { MatDialog } from '@angular/material';
import { TitleService } from '../../../core/title/title.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PickColumnDialogComponent } from '../../../ui/pick-column/totemanimal-pick-column-dialog/pick-column-dialog.component';
import { TotemAdjectiveEditComponent } from '../../components/totem-adjective-edit/totem-adjective-edit.component';

@Component({
  selector: 'app-adjectives',
  templateUrl: './adjectives.component.html',
  styleUrls: ['./adjectives.component.scss']
})
export class AdjectivesComponent implements OnInit {
  searchString$ = new BehaviorSubject<string>('');

  displayedColumns = [];

  possibleColumns = ['naam', 'createdOn', 'actions'];

  private readonly COLUMN_KEY = 'adjective-columns';

  constructor(
    public titleService: TitleService,
    private dialog: MatDialog,
    private columnService: ColumnService
  ) {
    this.titleService.setTitle('Adjectieven');
  }

  ngOnInit() {
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
        result.sort((a, b) => {
          return (
            this.possibleColumns.indexOf(a) - this.possibleColumns.indexOf(b)
          );
        });
        this.displayedColumns = result;
        localStorage.setItem(
          'adjective-columns',
          JSON.stringify(this.displayedColumns)
        );
      }
    });
  }

  edit(adjective: Adjective) {
    const dialogRef = this.dialog.open(TotemAdjectiveEditComponent, {
      width: '500px',
      data: { adjective: adjective }
    });
  }

  applyFilter(value: string) {
    this.searchString$.next(value);
  }
}
