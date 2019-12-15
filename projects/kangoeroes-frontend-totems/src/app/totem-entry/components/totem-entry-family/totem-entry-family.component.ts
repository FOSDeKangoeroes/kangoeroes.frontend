import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { TotemEntry } from '../../shared/totem-entry-model';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TotemEntryDataService } from '../../shared/totem-entry-data.service';
import { TotemEntryAddDescendantComponent } from '../totem-entry-add-descendant/totem-entry-add-descendant.component';

@Component({
  selector: 'app-totem-entry-family',
  templateUrl: './totem-entry-family.component.html',
  styleUrls: ['./totem-entry-family.component.scss']
})
export class TotemEntryFamilyComponent implements OnInit {
  @Input() totemEntry: TotemEntry;
   @Input() descendants: TotemEntry[];
   @ViewChild('descendantsTable', { static: true }) descendantsTable: MatTable<TotemEntry>;
  displayedColumns: string[] = ['displayName', 'totem'];

  constructor(private dialog: MatDialog) { }

  ngOnInit() {

  }

  addDescendant() {
    const dialogRef = this.dialog.open(TotemEntryAddDescendantComponent, {
      width: '800px',
      data: { displayName: this.totemEntry.displayName, parentId: this.totemEntry.id }
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        console.log(res);
        this.descendants.push(res);
        this.descendantsTable.renderRows();
      }
    });
  }
}
