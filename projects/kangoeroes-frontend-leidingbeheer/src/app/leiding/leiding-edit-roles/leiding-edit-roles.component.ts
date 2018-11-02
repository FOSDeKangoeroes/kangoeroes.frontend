import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DataService } from '../../services/data.service';
import { EventService } from '../../shared/event.service';

import { SnotifyService } from 'ng-snotify';
import { Role } from '../../core/auth/role.model';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'modal-content',
  templateUrl: './leiding-edit-roles.component.html',
  styleUrls: ['./leiding-edit-roles.component.scss']
})
export class LeidingEditRolesComponent implements OnInit {
  public roles: Role[];

  constructor(public changeRoleModalRef: BsModalRef,
    private dataService: DataService,
    private eventService: EventService,
    private snotifyService: SnotifyService) { }

  ngOnInit() {
    // TODO: loading indicator
  this.dataService.getRolesForUser(this.eventService.activeLeiding.id).subscribe(res => {
    this.roles = res;
  });
  }

 removeRole(role: Role) {
  console.log('Remove ' + role.roleName );

  this.dataService.removeRoleForUser(this.eventService.activeLeiding.id, role.roleId).subscribe(res => {
    if (res) {
     // Notificatie tonen
     role.isActive = false;

    }
  });
 }

 addRole(role: Role) {
   this.dataService.addRoleForUser(this.eventService.activeLeiding.id, role.roleId).subscribe(res => {
     if (res) {
       // Notificatie tonen
       role.isActive = true;
       this.snotifyService.success('Rol voor leiding succesvol gewijzigd!');
     }
   });
 }

 trackBy(index, role) {
   return role.id;
 }

}
