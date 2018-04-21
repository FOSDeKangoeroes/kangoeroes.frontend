import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Tak } from '../../tak/tak.model';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventService } from '../../shared/event.service';
import { DataService } from '../../services/data.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'modal-content',
  templateUrl: './leiding-change-tak.component.html',
  styleUrls: ['./leiding-change-tak.component.scss']
})
export class LeidingChangeTakComponent implements OnInit {

  constructor(public changeTakModal: BsModalRef,
    private dataService: DataService,
    private fb: FormBuilder,
    private eventService: EventService, private snotifyService: SnotifyService) { }

  public changeTakFormGroup: FormGroup;
  public takken: Tak[];
  public takkenLoading = true;
  leidingId: number;

  ngOnInit() {
    this.dataService.getTakken().subscribe(res => {
      this.takkenLoading = false;
      this.takken = res.body;
    });

    this.changeTakFormGroup = this.fb.group({
      tak: ['', [Validators.required, Validators.min(1)]]
    });

}

onSubmit() {
  const takId = this.changeTakFormGroup.value.tak;

  this.dataService.changeTakForLeiding(this.leidingId, takId).subscribe(res => {
    this.eventService.newLeiding(res);
    this.changeTakModal.hide();
    this.snotifyService.success('Tak succesvol gewijzigd!');
  });
}
}
