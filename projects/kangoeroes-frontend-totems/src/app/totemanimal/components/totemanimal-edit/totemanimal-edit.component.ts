import { Component, OnInit, Input, Inject } from '@angular/core';
import { Animal } from '../../shared/animal.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AnimalDataService } from '../../shared/animal-data.service';
import { AnimalService } from '../../shared/animal.service';

@Component({
  selector: 'app-totemanimal-edit',
  templateUrl: './totemanimal-edit.component.html',
  styleUrls: ['./totemanimal-edit.component.scss']
})
export class TotemanimalEditComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<TotemanimalEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    private animalDataService: AnimalDataService,
    private animalService: AnimalService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      name: [this.data.animal.naam, [Validators.required]]
    });
  }

  onSubmit() {
    if (this.formGroup.valid === true) {
      const updatedTotem = {
        id: this.data.animal.id,
        naam: this.formGroup.value.name
      };

      this.animalDataService.update(updatedTotem, this.data.animal.id).subscribe(res => {
        this.animalService.newAnimal$.emit(res);
        this.dialogRef.close();
        this.snackbar.open(`${res.naam} werd gewijzigd!`, null, {
          duration: 2000
        });
      });
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
