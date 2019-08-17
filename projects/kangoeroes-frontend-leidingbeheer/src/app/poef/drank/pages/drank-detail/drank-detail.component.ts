import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Drank } from '../../shared/drank.model';
import { DrankDataService } from '../../shared/drank-data.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-drank-detail',
  templateUrl: './drank-detail.component.html',
  styleUrls: ['./drank-detail.component.scss']
})
export class DrankDetailComponent implements OnInit {

  drank: Drank;

  constructor(
    private route: ActivatedRoute,
    private drankDataService: DrankDataService,
    private snotifyService: SnotifyService,
    private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(item => this.drank = item['drank']);
  }

  delete() {
    if(confirm(`Wil je ${this.drank.displayName} verwijderen?`)) {
      this.drankDataService.delete(this.drank.id).subscribe(res => {
        this.router.navigate(['/poef/drank']);
        this.snotifyService.success('Drank werd verwijderd.');
      }, err => {
        this.snotifyService.error('Kan drank niet verwijderen.');
      });
    }
  }

}
