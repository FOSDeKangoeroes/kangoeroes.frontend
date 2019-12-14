import { Component, OnInit } from '@angular/core';
import { FieldComponentBase } from '../field-component-base';
import { FormGroup } from '@angular/forms';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'kangoeroe-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.scss']
})
export class RadiobuttonComponent extends FieldComponentBase implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
