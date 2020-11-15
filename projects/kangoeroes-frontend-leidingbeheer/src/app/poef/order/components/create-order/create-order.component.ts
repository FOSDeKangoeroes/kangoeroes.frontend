import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FieldConfig } from 'projects/kangoeroes-frontend-core/src/lib/dynamic-form/field.interface';
import { LeidingDataService } from 'projects/kangoeroes-frontend-leidingbeheer/src/app/leiding/shared/leiding-data.service';
import { DrankDataService } from '../../../drank/shared/drank-data.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {

  orderForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public leidingDataService: LeidingDataService,
    public drankDataService: DrankDataService,
    public addOrderRef: BsModalRef) {

    this.orderForm = this.fb.group({
      orderedFor: [, [Validators.required]],
      drink: [, [Validators.required]],
      quantity: ['', [Validators.required]]

    });
   }

  ngOnInit() {
  }

}
