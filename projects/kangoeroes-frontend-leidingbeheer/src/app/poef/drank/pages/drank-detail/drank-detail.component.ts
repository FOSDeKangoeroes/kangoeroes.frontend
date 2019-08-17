import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Drank } from '../../shared/drank.model';

@Component({
  selector: 'app-drank-detail',
  templateUrl: './drank-detail.component.html',
  styleUrls: ['./drank-detail.component.scss']
})
export class DrankDetailComponent implements OnInit {

  drank: Drank;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(item => this.drank = item['drank']);
  }

}
