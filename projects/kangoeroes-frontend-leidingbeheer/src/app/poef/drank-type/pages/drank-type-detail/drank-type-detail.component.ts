import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrankType } from '../../shared/drank-type-model';
import { SearchBarService } from 'projects/kangoeroes-frontend-core/src/lib/components/search-bar/search-bar.service';
import { DrankTypeEditComponent } from '../../components/drank-type-edit/drank-type-edit.component';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { DrankTypeService } from '../../shared/drankType.service';
import { DrankTypeDataService } from '../../shared/drank-type-data.service';
import { mergeMap } from 'rxjs/operators';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-drank-type-detail',
  templateUrl: './drank-type-detail.component.html',
  styleUrls: ['./drank-type-detail.component.scss'],
  providers: [SearchBarService]
})
export class DrankTypeDetailComponent implements OnInit {
  public type: DrankType;

  public displayedColumns = ['naam', 'currentPrijs'];

  editModal: BsModalRef;

  constructor(
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private drankTypeService: DrankTypeService,
    private drankTypeDataService: DrankTypeDataService,
    private snotifyService: SnotifyService
  ) {}

  ngOnInit() {
    this.route.data.subscribe(item => (this.type = item['type']));
  }

  openEditModal() {
    const initialState = { drankType: this.type };
    const options = new ModalOptions();
    options.initialState = initialState;
    this.editModal = this.modalService.show(DrankTypeEditComponent, options);

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
