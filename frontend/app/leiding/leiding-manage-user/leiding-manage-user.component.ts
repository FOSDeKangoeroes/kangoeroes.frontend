import { Leiding } from './../leiding.model';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../../shared/event.service';

@Component({
  selector: 'app-leiding-manage-user',
  templateUrl: './leiding-manage-user.component.html',
  styleUrls: ['./leiding-manage-user.component.scss']
})
export class LeidingManageUserComponent implements OnInit {

  leiding: Leiding;

  constructor(private eventService: EventService) {
    this.leiding = eventService.activeLeiding;
   }

  ngOnInit() {
  }

}
