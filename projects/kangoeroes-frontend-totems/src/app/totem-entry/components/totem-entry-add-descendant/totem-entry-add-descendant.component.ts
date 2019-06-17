import { TotemEntryDataService } from '../../shared/totem-entry-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-totem-entry-add-descendant',
  templateUrl: './totem-entry-add-descendant.component.html',
  styleUrls: ['./totem-entry-add-descendant.component.scss']
})
export class TotemEntryAddDescendantComponent implements OnInit {
  formGroup: FormGroup;
  required = [Validators.required];

  constructor(
    public dialogRef: MatDialogRef<TotemEntryAddDescendantComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    public totemEntryDataService: TotemEntryDataService,

  ) {}

  ngOnInit() {
    console.log(this.data);
    this.formGroup = this.fb.group({
      voorouder: [, [Validators.required]]
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {

      const descendantId = this.formGroup.value.descendant.control;
      this.totemEntryDataService.parent(this.data.parentId, descendantId).subscribe(res => {
        this.dialogRef.close(res);
      });
    }
  }

  addFormControl(name: string, formGroup: FormGroup): void {
    this.formGroup.addControl(name, formGroup);
  }

  onCancel() {
    this.dialogRef.close();
  }


}
