import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { DataService } from '../../data.service';
import { Tak } from '../tak.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'modal-content',
  templateUrl: './tak-add.component.html',
  styleUrls: ['./tak-add.component.scss']
})
export class TakAddComponent implements OnInit {

  public addTakFormGroup: FormGroup;

  constructor(public addModalRef: BsModalRef,
    private dataService: DataService,
    private fb: FormBuilder
    ) { }

  ngOnInit() {
    this.addTakFormGroup = this.fb.group({
      naam: ['', [Validators.required, Validators.minLength(2)]],
      volgorde: ['', [Validators.required, , Validators.min(1)]]

    });
  }

  onAdd() {
    const tak = new Tak(this.addTakFormGroup.value.naam, this.addTakFormGroup.value.volgorde);
    this.dataService.addTak(tak).subscribe(res => {
      if (res) {
        this.addModalRef.hide();
      }
    });
  }

}
