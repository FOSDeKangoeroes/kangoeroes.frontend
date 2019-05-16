import { AdjectiveService } from '../../shared/adjective.service';
import { MatSnackBar } from '@angular/material';
import { TotemAdjectiveDataService } from '../../shared/totem-adjective-data.service';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-totem-adjective-add',
  templateUrl: './totem-adjective-add.component.html',
  styleUrls: ['./totem-adjective-add.component.scss']
})
export class TotemAdjectiveAddComponent implements OnInit {

  addAdjectiveFormGroup: FormGroup;

  @ViewChild(FormGroupDirective) form;

  constructor(
    private fb: FormBuilder,
    private adjectiveDataService: TotemAdjectiveDataService,
    private snackbar: MatSnackBar,
    private adjectiveService: AdjectiveService
  ) { }

  ngOnInit() {
    this.addAdjectiveFormGroup = this.fb.group({
      name: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.addAdjectiveFormGroup.valid === true) {
      const newAnimal = {
        naam: this.addAdjectiveFormGroup.value.name
      };

      this.adjectiveDataService.create(newAnimal).subscribe(res => {
        this.snackbar.open(`${res.naam} werd toegevoegd!`, null, {
          duration: 2000
        });
        this.adjectiveService.newAdjective$.emit(res);
        this.form.resetForm();
      }, error => {
        this.snackbar.open(error.error, null, { duration: 2000 });
      });
    }
  }

}
