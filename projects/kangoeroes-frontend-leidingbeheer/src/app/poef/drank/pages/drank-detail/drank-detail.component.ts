import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Drank } from '../../shared/drank.model';
import { DrankDataService } from '../../shared/drank-data.service';
import { SnotifyService } from 'ng-snotify';
import { Prijs } from '../../shared/prijs.model';
import { Observable, concat } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ModalOptions, BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DrankEditComponent } from '../../components/drank-edit/drank-edit.component';

@Component({
  selector: 'app-drank-detail',
  templateUrl: './drank-detail.component.html',
  styleUrls: ['./drank-detail.component.scss']
})
export class DrankDetailComponent implements OnInit {
  drank: Drank;

  prices$: Observable<Prijs[]>;

  private editModal: BsModalRef;

  constructor(
    private route: ActivatedRoute,
    private drankDataService: DrankDataService,
    private snotifyService: SnotifyService,
    private router: Router,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.route.data.pipe(
      mergeMap(item => {
        this.drank = item['drank'];
       return this.drankDataService.listPrices(this.drank.id);
      })
    ).subscribe();

    this.prices$ = this.drankDataService.listPrices(this.drank.id);
  }

  delete() {
    if (confirm(`Wil je ${this.drank.displayName} verwijderen?`)) {
      this.drankDataService.delete(this.drank.id).subscribe(
        res => {
          this.router.navigate(['/poef/drank']);
          this.snotifyService.success('Drank werd verwijderd.');
        },
        err => {
          this.snotifyService.error('Kan drank niet verwijderen.');
        }
      );
    }
  }

  edit() {
    const initialState = {drank: this.drank};
    const options = new ModalOptions();
    options.initialState = initialState;

    this.editModal = this.modalService.show(DrankEditComponent, options);

    this.setupEditSubmission();
  }

  private setupEditSubmission() {
    this.editModal.content.editedDrank.pipe(
      mergeMap((value: Drank) => {
        return this.drankDataService.update(value, value.id);
      })
    ).subscribe(res => {
      this.editModal.hide();
      this.snotifyService.success('Drank werd gewijzigd.');
    }, err => {
      this.snotifyService.error('Drank kon niet gewijzigd worden.');
    });
  }
}
