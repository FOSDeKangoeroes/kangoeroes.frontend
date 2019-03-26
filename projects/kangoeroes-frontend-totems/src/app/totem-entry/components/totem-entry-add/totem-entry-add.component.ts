import { AnimalFactory } from '../../../totemanimal/shared/animal-factory';
import { AdjectiveFactory } from '../../../totemadjective/shared/adjective-factory';
import { LeidingFactory } from '../../../leiding/leiding-factory';
import { TotemEntryService } from '../../shared/totem-entry.service';
import { AnimalDataService } from '../../../totemanimal/shared/animal-data.service';
import { LeidingDataService } from '../../../leiding/leiding-data.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import { TotemAdjectiveDataService } from '../../../totemadjective/shared/totem-adjective-data.service';
import { TotemEntryDataService } from '../../shared/totem-entry-data.service';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-totem-entry-add',
  templateUrl: './totem-entry-add.component.html',
  styleUrls: ['./totem-entry-add.component.scss']
})
export class TotemEntryAddComponent implements OnInit {
  addEntryFormGroup: FormGroup;
  required = [Validators.required];

  leidingFactory = new LeidingFactory();
  adjectiveFactory = new AdjectiveFactory();
  animalFactory = new AnimalFactory();

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
      persoon: [, [Validators.required]],
      adjectief: [, [Validators.required]],
      totem: [, [Validators.required]],
      datumGekregen: [''],
      voorouder: [,]

    });
  }

   addFormControl(name: string, formGroup: FormGroup): void {
    this.addEntryFormGroup.addControl(name, formGroup);
  }

  onSubmit() {
    const datumGekregen = moment(this.addEntryFormGroup.value.datumGekregen).toISOString();
    const voorouder = this.addEntryFormGroup.value.voorouder ? this.addEntryFormGroup.value.voorouder : 0;
    const newEntry = {
      leidingId: this.addEntryFormGroup.value.persoon,
      totemId: this.addEntryFormGroup.value.totem,
      adjectiefId: this.addEntryFormGroup.value.adjectief,
      datumGegeven: datumGekregen ? datumGekregen : undefined,
      voorouderId: voorouder
    };
  this.totemEntryDataService.create(newEntry).subscribe(res => {
    this.totemEntryService.entryChanged$.emit();
  }, error => {
      this.snackbar.open(`${error.message}`, null, {
        duration: 2000
      });
  });
  }

}
