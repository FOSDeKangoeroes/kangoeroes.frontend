import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { AnimalDataService } from '../../shared/animal-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AnimalService } from '../../shared/animal.service';

@Component({
  selector: 'app-totemanimal-add',
  templateUrl: './totemanimal-add.component.html',
  styleUrls: ['./totemanimal-add.component.scss']
})
export class TotemanimalAddComponent implements OnInit {

  addAnimalFormGroup: FormGroup;

  @ViewChild(FormGroupDirective, { static: true }) form;

  constructor(
    private fb: FormBuilder,
    private animalDataService: AnimalDataService,
    private snackbar: MatSnackBar,
    private animalService: AnimalService) { }

  ngOnInit() {
    this.addAnimalFormGroup = this.fb.group({
      name: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.addAnimalFormGroup.valid === true) {
      const newAnimal = {
      naam: this.addAnimalFormGroup.value.name
    };

    this.animalDataService.create(newAnimal).subscribe(res => {
      this.snackbar.open(`${res.naam} werd toegevoegd!`, null, {
        duration: 2000
      });
      this.animalService.newAnimal$.emit();
      this.form.resetForm();

    }, error => {
      this.snackbar.open(error.error, null, {duration: 2000});
    });
    }
  }

}
