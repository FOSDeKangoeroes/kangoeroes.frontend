import { ColumnService } from '../../../core/title/column.service';
import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../core/title/title.service';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
// tslint:disable-next-line:max-line-length

import { Animal } from '../../shared/animal.model';
import { TotemanimalEditComponent } from '../../components/totemanimal-edit/totemanimal-edit.component';
import { PickColumnDialogComponent } from '../../../ui/pick-column/totemanimal-pick-column-dialog/pick-column-dialog.component';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {

  searchString$ = new BehaviorSubject<string>('');

  displayedColumns = [];

  possibleColumns = ['naam', 'createdOn','entryCount','reuseDate', 'actions'];
  private  readonly COLUMN_KEY = 'animal-columns';
  constructor(
    public titleService: TitleService,
    private dialog: MatDialog,
    private columnService: ColumnService) {
    this.titleService.setTitle('Dieren');
  }

  ngOnInit() {
    // Set initial column values if user has never seen the table or storage has been wiped
    if (!this.columnService.itemIsInStorage(this.COLUMN_KEY)) {
      this.columnService.setDisplayedColumns(this.COLUMN_KEY, this.possibleColumns);
    }
    this.displayedColumns = this.columnService.getDisplayedColumns(this.COLUMN_KEY);
  }

  applyFilter(value: string) {
    this.searchString$.next(value);
  }

  openDialog() {
    const dialogRef = this.dialog.open(PickColumnDialogComponent, {
      width: '500px',
      data: { possibleColumns: this.possibleColumns, selectedColumns: this.displayedColumns }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result !== undefined) {
        // Sort the returned selection on the original column order.
        result.sort((a, b) => {
            return this.possibleColumns.indexOf(a) - this.possibleColumns.indexOf(b);
        });

        // Set the displayed columns and save them to local storage for further use
        this.displayedColumns = result;
        this.columnService.setDisplayedColumns(this.COLUMN_KEY, this.displayedColumns);
      }

    });
  }

  edit(animal: Animal) {
    const dialogRef = this.dialog.open(TotemanimalEditComponent, {
      width: '500px',
      data: {animal: animal}
    });
  }


}

