import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DataService } from '../../data.service';
import { Leiding } from '../../leiding/leiding.model';

// Custom validator om optionele velden te valideren
function emailOrEmpty(validators?: (ValidatorFn | null | undefined)[] ): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    return control.value  ? Validators.compose(validators)(control) : null;
  };
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'modal-content',
  templateUrl: './tak-leiding-add.component.html',
  styleUrls: ['./tak-leiding-add.component.scss']
})
export class TakLeidingAddComponent implements OnInit {

  public addLeidingFormGroup: FormGroup;

  naam: string;
  takId: number;

  constructor(public addLeidingModalRef: BsModalRef, private fb: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
    this.addLeidingFormGroup = this.fb.group({
      naam: ['', [Validators.required, Validators.minLength(2)]],
      voornaam: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [emailOrEmpty([Validators.email])]]
    });
  }

  onSubmit() {
    const leiding = new Leiding(
      this.addLeidingFormGroup.value.naam,
      this.addLeidingFormGroup.value.voornaam);
      leiding.takId = this.takId;

    this.dataService.addLeiding(leiding).subscribe(item => {
      this.addLeidingModalRef.hide();
    });
  }

}
