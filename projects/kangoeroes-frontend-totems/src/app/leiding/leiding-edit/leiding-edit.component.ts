import { Component, OnInit, Input } from '@angular/core';
import { Leiding } from '../leiding.model';
import { FieldConfig } from 'projects/kangoeroes-frontend-core/src/lib/dynamic-form/field.interface';
import { LeidingDataService } from '../leiding-data.service';


@Component({
  selector: 'app-leiding-edit',
  templateUrl: './leiding-edit.component.html',
  styleUrls: ['./leiding-edit.component.scss']
})
export class LeidingEditComponent implements OnInit {

  @Input() leiding: Leiding;

  regConfig: FieldConfig[];

  constructor(private leidingDataService: LeidingDataService) { }

  ngOnInit() {

    this.regConfig = [
      {
        name: 'datumGestopt',
        label: 'Datum gestopt als leiding',
        type: 'date',
        value: this.leiding.datumGestopt
      },
      {
        type: 'button',
        label: 'Stopdatum opslaan',
        cssClass: 'mat-raised-button float-right'
      }
    ];

  }

  onSubmit(event) {

    this.leiding.datumGestopt = event.datumGestopt;
    this.leidingDataService.update(this.leiding, this.leiding.id).subscribe(res => {

    });
  }

}
