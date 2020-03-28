import { Component, OnInit } from '@angular/core';
import { FieldConfig } from 'projects/kangoeroes-frontend-core/src/lib/dynamic-form/field.interface';
import { Validators } from '@angular/forms';
import { PeriodDataService } from '../../shared/period-data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-create-period',
  templateUrl: './create-period.component.html',
  styleUrls: ['./create-period.component.scss']
})
export class CreatePeriodComponent implements OnInit {
  regConfig: FieldConfig[] = [
    {
      type: 'input',
      label: 'Naam',
      inputType: 'text',
      name: 'naam',
      cssClass: 'col-12',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Naam is verplicht.'
        }
      ]
    },
    {
      type: 'date',
      label: 'Startdatum',
      inputType: 'date',
      name: 'startDate',
      cssClass: 'col-12',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Startdatum is verplicht.'
        }
      ]
    },
    {
      type: 'date',
      label: 'Einddatum',
      inputType: 'date',
      name: 'endDate',
      cssClass: 'col-12',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Einddatum is verplicht.'
        }
      ]
    },
    {
      type: 'button',
      label: 'Toevoegen',
      cssClass: 'btn btn-success col-12'
    }
  ];

  constructor(private periodDataService: PeriodDataService) {}

  ngOnInit() {}

  onSubmit(event) {
    console.log(event);
    const newPeriod = {
      name: event.naam,
      start: moment(event.startDate).utc(true),
      end: moment(event.endDate).utc(true)
    };

    this.periodDataService.create(newPeriod).subscribe(res => {
      console.log('Succes!');
      console.log(res);
    });

  }
}
