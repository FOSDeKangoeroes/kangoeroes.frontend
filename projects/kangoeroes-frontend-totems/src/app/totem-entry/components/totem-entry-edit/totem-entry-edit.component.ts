import { MatSnackBar } from '@angular/material';
import { TotemEntryService } from '../../shared/totem-entry.service';
import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { TotemEntry } from '../../shared/totem-entry-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LeidingDataService } from '../../../leiding/leiding-data.service';
import { TotemAdjectiveDataService } from '../../../totemadjective/shared/totem-adjective-data.service';
import { AnimalDataService } from '../../../totemanimal/shared/animal-data.service';
import { TotemEntryDataService } from '../../shared/totem-entry-data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-totem-entry-edit',
  templateUrl: './totem-entry-edit.component.html',
  styleUrls: ['./totem-entry-edit.component.scss']
})
export class TotemEntryEditComponent implements OnInit, AfterViewInit {

  @Input() totemEntry: TotemEntry;

  @ViewChild('adjectiveSelectList')
  adjectiveSelectList;
  addEntryFormGroup: FormGroup;
  required = [Validators.required];

  constructor(
    private fb: FormBuilder,
    public leidingDataService: LeidingDataService,
    public adjectiveDataService: TotemAdjectiveDataService,
    public animalDataService: AnimalDataService,
    public totemEntryDataService: TotemEntryDataService,
    private totemEntryService: TotemEntryService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.addEntryFormGroup = this.fb.group({
      datumGekregen: ['']
    });

  }

  ngAfterViewInit(): void {
   
  }

  addFormControl(name: string, formGroup: FormGroup): void {
    this.addEntryFormGroup.addControl(name, formGroup);
  }

  onSubmit() {
    const datumGekregen = moment(this.addEntryFormGroup.value.datumGekregen).toISOString();
    const voorouder = this.addEntryFormGroup.value.voorouder.control ? this.addEntryFormGroup.value.voorouder.control : 0;
    const newEntry = {

      totemId: this.addEntryFormGroup.value.totem.control,
      adjectiefId: this.addEntryFormGroup.value.adjectief.control,
      datumGegeven: datumGekregen ? datumGekregen : undefined,
      voorouderId: voorouder
    };

    this.totemEntryDataService.update(newEntry, this.totemEntry.id).subscribe(res => {
      this.totemEntryService.entryChanged$.emit();
      this.snackbar.open(`${res.displayName} werd gewijzigd!`, null, {
        duration: 2000
      });
    });
  }
}
