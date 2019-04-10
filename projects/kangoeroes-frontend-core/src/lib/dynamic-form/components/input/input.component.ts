import { Component, OnInit } from '@angular/core';
import { FieldComponentBase } from '../field-component-base';

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
