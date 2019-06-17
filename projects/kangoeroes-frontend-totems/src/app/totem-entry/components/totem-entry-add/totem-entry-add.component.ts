import { AnimalFactory } from '../../../totemanimal/shared/animal-factory';
import { AdjectiveFactory } from '../../../totemadjective/shared/adjective-factory';
import { LeidingFactory } from '../../../leiding/leiding-factory';
import { TotemEntryService } from '../../shared/totem-entry.service';
import { AnimalDataService } from '../../../totemanimal/shared/animal-data.service';
import { LeidingDataService } from '../../../leiding/leiding-data.service';

import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TotemAdjectiveDataService } from '../../../totemadjective/shared/totem-adjective-data.service';
import { TotemEntryDataService } from '../../shared/totem-entry-data.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RequireMatch } from 'projects/kangoeroes-frontend-core/src/lib/validators/autocomplete-validator';
import { Resource } from 'projects/kangoeroes-frontend-core/src/lib/data-service/resource-model';
import { LeidingAddComponent } from '../../../leiding/leiding-add/leiding-add.component';

@Component({
  selector: 'app-totem-entry-add',
  templateUrl: './totem-entry-add.component.html',
  styleUrls: ['./totem-entry-add.component.scss']
})
export class TotemEntryAddComponent implements OnInit {
  addEntryFormGroup: FormGroup;

  leidingFactory = new LeidingFactory();
  adjectiveFactory = new AdjectiveFactory();
  animalFactory = new AnimalFactory();

  displayItem = (x: Resource) => {
    if (x) {
      return x.displayName;
    }
  }

  constructor(
    private fb: FormBuilder,
    public leidingDataService: LeidingDataService,
    public adjectiveDataService: TotemAdjectiveDataService,
    public animalDataService: AnimalDataService,
    public totemEntryDataService: TotemEntryDataService,
    private totemEntryService: TotemEntryService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.addEntryFormGroup = this.fb.group({
      persoon: [, [Validators.required, RequireMatch]],
      adjectief: [, [Validators.required, RequireMatch]],
      totem: [, [Validators.required, RequireMatch]],
      datumGekregen: [''],
      voorouder: [, RequireMatch]
    });
  }

  onSubmit(formDirective: FormGroupDirective) {
    const datumGekregen = this.addEntryFormGroup.value.datumGekregen;

    const voorouder = this.addEntryFormGroup.value.voorouder
      ? this.addEntryFormGroup.value.voorouder
      : 0;
    const newEntry = {
      leidingId: this.addEntryFormGroup.value.persoon.id,
      totemId: this.addEntryFormGroup.value.totem.id,
      adjectiefId: this.addEntryFormGroup.value.adjectief.id,
      datumGegeven: datumGekregen ? datumGekregen : undefined,
      voorouderId: voorouder.id
    };
    this.totemEntryDataService.create(newEntry).subscribe(
      res => {
        this.totemEntryService.entryChanged$.emit();
        this.addEntryFormGroup.reset();
        formDirective.resetForm();

      },
      error => {
        this.snackbar.open(`${error.error}`, null, {
          duration: 2000
        });
      }
    );
  }

  addNewPerson(value: string) {
    this.dialog.open(LeidingAddComponent, {
      width: '500px',
      data: {
        value: value
      }
    });
  }
}
