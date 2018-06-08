import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { EventService } from '../../shared/event.service';
import { DataService } from './../../services/data.service';
import { Leiding } from './../leiding.model';

@Component({
  selector: 'app-leiding-manage-user',
  templateUrl: './leiding-manage-user.component.html',
  styleUrls: ['./leiding-manage-user.component.scss']
})
export class LeidingManageUserComponent implements OnInit {

  leiding: Leiding;
  linkUserFormGroup: FormGroup;

  constructor(
    private eventService: EventService,
    public manageUserModal: BsModalRef,
    private dataService: DataService,
    private fb: FormBuilder) {
    this.leiding = eventService.activeLeiding;
   }

  ngOnInit() {
    this.linkUserFormGroup = this.fb.group({
        auth0Id: [this.leiding.auth0Id]
    });

  }

  createUser() {
    this.dataService.createUser(this.leiding.id).subscribe(res => {
      this.manageUserModal.hide();
      this.eventService.$newLeiding.emit(res);
    });
  }

  linkUser() {
    this.leiding.auth0Id = this.linkUserFormGroup.value.auth0Id;
    this.dataService.updateLeiding(this.leiding, this.leiding.id).subscribe(res => {
      this.eventService.newLeiding(res);
      this.manageUserModal.hide();
    });
  }

}
