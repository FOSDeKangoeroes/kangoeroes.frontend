import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldComponentBase } from '../field-component-base';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'kangoeroe-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent extends FieldComponentBase implements OnInit {


  constructor() {
    super();
   }

  ngOnInit() {
  }

}
