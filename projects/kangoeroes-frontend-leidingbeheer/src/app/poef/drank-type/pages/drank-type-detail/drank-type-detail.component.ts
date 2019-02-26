import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrankType } from '../../shared/drank-type-model';

@Component({
  selector: 'app-drank-type-detail',
  templateUrl: './drank-type-detail.component.html',
  styleUrls: ['./drank-type-detail.component.scss']
})
export class DrankTypeDetailComponent implements OnInit {

  private type: DrankType;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(item => this.type = item['type']);
  }

}
