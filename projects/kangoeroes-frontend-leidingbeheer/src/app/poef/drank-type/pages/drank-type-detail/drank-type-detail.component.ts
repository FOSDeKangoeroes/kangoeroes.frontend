import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DrankType } from '../../shared/drank-type-model';
import { SearchBarService } from 'projects/kangoeroes-frontend-core/src/lib/components/search-bar/search-bar.service';
import { DrankTypeEditComponent } from '../../components/drank-type-edit/drank-type-edit.component';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { DrankTypeService } from '../../shared/drankType.service';
import { DrankTypeDataService } from '../../shared/drank-type-data.service';
import { mergeMap, switchMap, map } from 'rxjs/operators';
import { SnotifyService } from 'ng-snotify';
import { DrankTypeSubDataService } from '../../shared/drank-type-sub-data.service';
import { Drank } from '../../../drank/shared/drank.model';
import { QueryOptions } from 'projects/kangoeroes-frontend-core/src/lib/data-service/query-options';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-drank-type-detail',
  templateUrl: './drank-type-detail.component.html',
  styleUrls: ['./drank-type-detail.component.scss'],
  providers: [SearchBarService]
})
export class DrankTypeDetailComponent implements OnInit {
  public type: DrankType;

  editModal: BsModalRef;

  columns = [
    {headerName: 'Naam', field: 'naam', sortable: true, filter: true},
    {headerName: 'Prijs', field: 'prijs'}
  ];

 rowData: Observable<Drank[]>;

  constructor(
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private drankTypeService: DrankTypeService,
    private drankTypeDataService: DrankTypeDataService,
    private drankTypeSubResourceService: DrankTypeSubDataService,
    private snotifyService: SnotifyService,
    private router: Router
  ) {}

  ngOnInit() {

    this.route.data.pipe(map(item => {
        this.type = item['type'];
        this.rowData = this.drankTypeSubResourceService.list(this.type.id, new QueryOptions());
    })
    ).subscribe();

  }

  openEditModal() {
    const initialState = { drankType: this.type };
    const options = new ModalOptions();
    options.initialState = initialState;
    this.editModal = this.modalService.show(DrankTypeEditComponent, options);

    this.setupEditSubmission();
  }

  openDeleteModal() {
    if (confirm(`Wil je ${this.type.displayName} verwijderen?`)) {
      this.drankTypeDataService.delete(this.type.id).subscribe(res => {
        this.router.navigate(['/poef/drank-type']);
        this.snotifyService.success(`Type werd verwijderd.`);
      }, err => {
        this.snotifyService.error('Kan type niet verwijderen.');
      });

    }
  }

  // Observable manipulation when the modal is submitted.
  private setupEditSubmission() {
    this.editModal.content.editedType
      .pipe(
        mergeMap((value: DrankType) => {
          return this.drankTypeDataService.update(value, value.id);
        })
      )
      .subscribe(res => {
        this.editModal.hide();
        this.snotifyService.success('Type werd gewijzigd.');
      });
  }
}
