import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../data.service';
import { Util } from '../util';
import { Tak } from '../../tak/tak.model';
import { Leiding } from '../leiding.model';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'modal-content',
  templateUrl: './leiding-add.component.html',
  styleUrls: ['./leiding-add.component.scss']
})
export class LeidingAddComponent implements OnInit {

  public addLeidingFormGroup: FormGroup;
  public takken: Tak[];

  constructor(public addLeidingModalRef: BsModalRef, private fb: FormBuilder, private dataService: DataService) { }

  ngOnInit() {

    this.dataService.takken.subscribe(res => {
      this.takken = res;
    });

    this.addLeidingFormGroup = this.fb.group({
      naam: ['', [Validators.required, Validators.minLength(2)]],
      voornaam: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Util.emailOrEmpty([Validators.email])]],
      tak: ['', [Validators.required]]
    });
  }

onSubmit() {
  const leiding = new Leiding(this.addLeidingFormGroup.value.naam, this.addLeidingFormGroup.value.voornaam);
  leiding.email = this.addLeidingFormGroup.value.email;
  leiding.takId = this.addLeidingFormGroup.value.tak;

  this.dataService.addLeiding(leiding).subscribe(res => {
    this.addLeidingModalRef.hide();
  });

}

}
