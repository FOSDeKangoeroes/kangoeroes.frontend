import { Component, OnInit } from '@angular/core';
import { FieldComponentBase } from '../field-component-base';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'kangoeroe-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent extends FieldComponentBase implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
