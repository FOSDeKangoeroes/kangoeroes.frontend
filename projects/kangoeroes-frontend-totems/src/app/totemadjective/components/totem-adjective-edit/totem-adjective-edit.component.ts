import { AdjectiveService } from '../../shared/adjective.service';
import { TotemAdjectiveDataService } from '../../shared/totem-adjective-data.service';
import { Component, OnInit, Input, Inject } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-totem-adjective-edit',
  templateUrl: './totem-adjective-edit.component.html',
  styleUrls: ['./totem-adjective-edit.component.scss']
})
export class TotemAdjectiveEditComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<TotemAdjectiveEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    private adjectiveDataService: TotemAdjectiveDataService,
    private adjectiveService: AdjectiveService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      name: [this.data.adjective.naam, [Validators.required]]
    });
  }

  onSubmit() {
    if (this.formGroup.valid === true) {
      const updatedAdjective = {
        id: this.data.adjective.id,
        naam: this.formGroup.value.name,
        createdOn: this.data.adjective.createdOn
      };

      this.adjectiveDataService
        .update(updatedAdjective, this.data.adjective.id)
        .subscribe(res => {
          this.adjectiveService.newAdjective$.emit(res);
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
