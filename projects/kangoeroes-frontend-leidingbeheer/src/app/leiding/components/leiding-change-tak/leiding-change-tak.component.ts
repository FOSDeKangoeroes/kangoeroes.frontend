import { EventService } from './../../../shared/event.service';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SnotifyService } from 'ng-snotify';
import { Tak } from '../../../tak/shared/tak.model';
import { TakDataService } from '../../../tak/shared/tak-data.service';
import { LeidingDataService } from '../../shared/leiding-data.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'modal-content',
  templateUrl: './leiding-change-tak.component.html',
  styleUrls: ['./leiding-change-tak.component.scss']
})
export class LeidingChangeTakComponent implements OnInit {

  constructor(public changeTakModal: BsModalRef,
    public takDataService: TakDataService,
    private leidingDataService: LeidingDataService,
    private fb: FormBuilder,
    private eventService: EventService, private snotifyService: SnotifyService) { }

  public changeTakFormGroup: FormGroup;
  public takken: Tak[];
  public takkenLoading = true;
  leidingId: number;

  ngOnInit() {

    this.changeTakFormGroup = this.fb.group({
      tak: [, [Validators.required]]
    });

}

onSubmit() {
  const takId = this.changeTakFormGroup.value.tak;

  this.leidingDataService.tak(this.leidingId, takId).subscribe(res => {
    this.eventService.newLeiding(res);
    this.changeTakModal.hide();
    this.snotifyService.success('Tak succesvol gewijzigd!');
  });
}

}
