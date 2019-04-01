import { MatSnackBar } from '@angular/material';
import { TotemEntryService } from '../../shared/totem-entry.service';
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { TotemEntry } from '../../shared/totem-entry-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LeidingDataService } from '../../../leiding/leiding-data.service';
import { TotemAdjectiveDataService } from '../../../totemadjective/shared/totem-adjective-data.service';
import { AnimalDataService } from '../../../totemanimal/shared/animal-data.service';
import { TotemEntryDataService } from '../../shared/totem-entry-data.service';
import * as moment from 'moment';
import { RequireMatch } from 'projects/kangoeroes-frontend-core/src/lib/validators/autocomplete-validator';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> 768f6ffaec8fc977adad1aced3af86d10902a73b

@Component({
  selector: 'app-totem-entry-edit',
  templateUrl: './totem-entry-edit.component.html',
  styleUrls: ['./totem-entry-edit.component.scss']
})
export class TotemEntryEditComponent implements OnInit {
  @Input() totemEntry: TotemEntry;

  addEntryFormGroup: FormGroup;
  private voorouder?: TotemEntry;

  displayFnGrandparent = (x: any) => {

 if (x) {
   return `${x.displayName} \/\/ ${x.leidingVoornaam} ${x.leidingNaam}`;
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
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {

    this.addEntryFormGroup = this.fb.group({
      adjectief: [this.totemEntry.adjectief, [Validators.required, RequireMatch]],
      totem: [this.totemEntry.totem, [Validators.required, RequireMatch]],
      datumGekregen: [''],
      voorouder: [[RequireMatch]]

    });

    if  (this.totemEntry.voorouderId) {
      this.totemEntryDataService.read(this.totemEntry.voorouderId).subscribe(res => {
        this.addEntryFormGroup.get('voorouder').setValue(res);
      });
    }

  }

  addFormControl(name: string, formGroup: FormGroup): void {
    this.addEntryFormGroup.addControl(name, formGroup);
  }

  onSubmit() {
    const datumGekregen = moment(this.addEntryFormGroup.value.datumGekregen).toISOString();
    const voorouder = this.addEntryFormGroup.value.voorouder.id ? this.addEntryFormGroup.value.voorouder.id : 0;
    const newEntry = {

      totemId: this.addEntryFormGroup.value.totem.id,
      adjectiefId: this.addEntryFormGroup.value.adjectief.id,
      datumGegeven: datumGekregen ? datumGekregen : undefined,
      voorouderId: voorouder
    };

    this.totemEntryDataService
      .update(newEntry, this.totemEntry.id)
      .subscribe(res => {
        this.totemEntryService.entryChanged$.emit();
        this.snackbar.open(`${res.displayName} werd gewijzigd!`, null, {
          duration: 2000
        });
      });
  }
}
