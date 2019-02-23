import { FieldConfig } from '../field.interface';
import { FormGroup } from '@angular/forms';

export abstract class FieldComponentBase {
    field: FieldConfig;
    group: FormGroup;
}
