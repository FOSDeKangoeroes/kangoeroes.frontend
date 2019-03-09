import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrankType } from '../../shared/drank-type-model';
import { SearchBarService } from 'projects/kangoeroes-frontend-core/src/lib/components/search-bar/search-bar.service';

@Component({
  selector: 'app-drank-type-detail',
  templateUrl: './drank-type-detail.component.html',
  styleUrls: ['./drank-type-detail.component.scss'],
  providers: [SearchBarService]
})
export class DrankTypeDetailComponent implements OnInit {

  public type: DrankType;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(item => this.type = item['type']);
  }

}
