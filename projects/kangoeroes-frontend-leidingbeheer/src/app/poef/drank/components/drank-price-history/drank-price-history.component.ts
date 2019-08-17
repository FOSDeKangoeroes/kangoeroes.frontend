import { Component, OnInit, Input } from '@angular/core';
import { Prijs } from '../../shared/prijs.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-drank-price-history',
  templateUrl: './drank-price-history.component.html',
  styleUrls: ['./drank-price-history.component.scss']
})
export class DrankPriceHistoryComponent implements OnInit {

  @Input() prices: Observable<Prijs[]>;

  constructor() { }

  ngOnInit() {
  }

}
