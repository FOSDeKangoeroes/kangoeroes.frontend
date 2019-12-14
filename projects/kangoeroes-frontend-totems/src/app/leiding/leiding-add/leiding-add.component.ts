import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LeidingDataService } from '../leiding-data.service';
import { Leiding } from 'projects/kangoeroes-frontend-leidingbeheer/src/app/leiding/shared/leiding.model';

@Component({
  selector: 'app-leiding-add',
  templateUrl: './leiding-add.component.html',
  styleUrls: ['./leiding-add.component.scss']
})
export class LeidingAddComponent implements OnInit {

  formGroup: FormGroup;

  constructor(public dialogRef: MatDialogRef<LeidingAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    private leidingDataService: LeidingDataService,
    private snackbar: MatSnackBar) { }

  ngOnInit() {

    this.formGroup = this.fb.group({
      name: [, [Validators.required]],
      firstname: [this.data.value, [Validators.required]]
    });
  }

  onSubmit() {
    const newPerson = new Leiding();
    newPerson.naam = this.formGroup.value.name,
    newPerson.voornaam = this.formGroup.value.firstname;

    this.leidingDataService.create(newPerson).subscribe(res => {
      this.dialogRef.close();
      this.snackbar.open(`${res.displayName} werd aangemaakt. Selecteer de persoon opnieuw in de lijst.`, null, {
        duration: 4000
      });
    });

  }

  onCancel() {
    this.dialogRef.close();
  }

}
