import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldComponentBase } from '../field-component-base';
import { FieldConfig } from '../../field.interface';
@Component({
  selector: 'kangoeroe-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent extends FieldComponentBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {}
}
