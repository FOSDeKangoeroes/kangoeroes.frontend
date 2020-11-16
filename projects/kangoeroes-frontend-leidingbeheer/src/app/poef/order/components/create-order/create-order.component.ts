import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
   leaders: Leiding[];
   drinks: Drank[];
   filteredLeaders: Observable<Leiding[]>;
   filteredDrinks: Observable<Drank[]>;

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

    this.filteredLeaders = this.orderForm.get('orderedFor').valueChanges.pipe(
      startWith(''),
      map(value => this._filterLeaders(value))
    );

    this.filteredDrinks = this.orderForm.get('drink').valueChanges.pipe(
      startWith(''),
      map(value => this._filterDrinks(value))
    );


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


  private _filterLeaders(value: string): Leiding[] {
    const filterValue = value.toLowerCase();

    return this.leaders.filter(option => option.displayName.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filterDrinks(value: string): Drank[] {
    const filterValue = value.toLowerCase();

    return this.drinks.filter(option => option.displayName.toLowerCase().indexOf(filterValue) === 0);
  }

  public displayFn(value: Resource) {
    return value.displayName;
  }

}
