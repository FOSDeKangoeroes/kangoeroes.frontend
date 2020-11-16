import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnotifyService } from 'ng-snotify';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { QueryOptions } from 'projects/kangoeroes-frontend-core/src/lib/data-service/query-options';
import { Resource } from 'projects/kangoeroes-frontend-core/src/lib/data-service/resource-model';
import { FieldConfig } from 'projects/kangoeroes-frontend-core/src/lib/dynamic-form/field.interface';
import { LeidingDataService } from 'projects/kangoeroes-frontend-leidingbeheer/src/app/leiding/shared/leiding-data.service';
import { LeidingQueryOptions } from 'projects/kangoeroes-frontend-leidingbeheer/src/app/leiding/shared/leiding-query-options';
import { Leiding } from 'projects/kangoeroes-frontend-leidingbeheer/src/app/leiding/shared/leiding.model';
import { Observable } from 'rxjs';
import { delay, map, startWith } from 'rxjs/operators';
import { DrankDataService } from '../../../drank/shared/drank-data.service';
import { Drank } from '../../../drank/shared/drank.model';
import { OrderDataService } from '../../shared/order-data.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CreateOrderComponent implements OnInit {

  orderForm: FormGroup;

  leadersLoading = false;
  drinksLoading = false;
  submittingOrder = false;
  leaders: Leiding[];
  drinks: Drank[];
  filteredLeaders: Observable<Leiding[]>[] = [];
  filteredDrinks: Observable<Drank[]>[] = [];
  formLines: FormArray;

  constructor(
    private fb: FormBuilder,
    public leidingDataService: LeidingDataService,
    public drankDataService: DrankDataService,
    public orderDataService: OrderDataService,
    public addOrderRef: BsModalRef,
    private snotifyService: SnotifyService) {



    this.orderForm = this.fb.group({

      orderlines: this.fb.array([this._createLineFormGroup()])

    });
    this._manageAutocompleteControls(0);
  }

  ngOnInit() {

    this.leadersLoading = true;
    this.drinksLoading = true;
    const leidingOptions = new LeidingQueryOptions();
    leidingOptions.tab = true;
    leidingOptions.sortBy = 'Voornaam';
    this.leidingDataService.list(leidingOptions).subscribe(res => {
      this.leaders = res.body;
      this.leadersLoading = false;
    });

    this.drankDataService.list(new QueryOptions()).subscribe(res => {
      this.drinks = res.body;
      this.drinksLoading = false;
    });
  }

  public addLineToForm() {
    this.formLines = this.orderForm.get('orderlines') as FormArray;
    this.formLines.push(this._createLineFormGroup());
    this._manageAutocompleteControls(this.formLines.length - 1);
  }

  public removeLine(index: number) {
    console.log(index);
    const lines = this.orderForm.get('orderlines') as FormArray;
    lines.removeAt(index);
    this.filteredDrinks.splice(index, 1);
    this.filteredLeaders.splice(index, 1);
  }

  public displayFn(value: Resource) {
    return value ? value.displayName : '';
  }

  public onSubmit() {
    this.submittingOrder = true;
    const linesToSubmit = [];

    this.orderForm.value.orderlines.map(line => {
        linesToSubmit.push({
          drankId: line.drink.id,
          orderedForId: line.orderedFor.id,
          quantity: line.quantity
        });
    });

    const order = {
      orderedById: 1,
      orderlines: linesToSubmit,
    };

    this.orderDataService.create(order).subscribe(res =>{
      
      this.addOrderRef.hide();
      this.snotifyService.success('Streepjes gezet!');
      this.submittingOrder = false;
    }, error => {
      this.snotifyService.error(error.message);
      this.submittingOrder = false;
    });
  }

  private _createLineFormGroup() {
    return this.fb.group(
      {
        orderedFor: [, [Validators.required]],
        drink: [, [Validators.required]],
        quantity: ['', [Validators.required]]

      }
    );
  }

 private _manageAutocompleteControls(index: number) {
    const arrayControl = this.orderForm.get('orderlines') as FormArray;
    this.filteredLeaders[index] = arrayControl.at(index).get('orderedFor').valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterLeaders(value))
      );

   this.filteredDrinks[index] = arrayControl.at(index).get('drink').valueChanges
     .pipe(
       startWith(''),
       map(value => this._filterDrinks(value))
     );
  }



  private _filterLeaders(value: string): Leiding[] {
    const filterValue = value.toLowerCase();

    return this.leaders.filter(option => option.displayName.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filterDrinks(value: string): Drank[] {
    const filterValue = value.toLowerCase();

    return this.drinks.filter(option => option.displayName.toLowerCase().indexOf(filterValue) === 0);
  }

  

}
