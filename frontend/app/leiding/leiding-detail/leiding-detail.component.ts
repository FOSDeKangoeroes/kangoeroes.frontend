import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Leiding } from '../leiding.model';

@Component({
  selector: 'app-leiding-detail',
  templateUrl: './leiding-detail.component.html',
  styleUrls: ['./leiding-detail.component.scss']
})
export class LeidingDetailComponent implements OnInit {

private _leiding: Leiding;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(item => this._leiding = item['leiding']);
   }

  ngOnInit() {
  }

  get leiding() {
    return this._leiding;
  }
}
