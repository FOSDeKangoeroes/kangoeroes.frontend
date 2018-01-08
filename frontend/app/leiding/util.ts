import { ValidatorFn, AbstractControl, Validators } from '@angular/forms';

export  class Util {

static emailOrEmpty(validators?: (ValidatorFn | null | undefined)[]): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        return control.value ? Validators.compose(validators)(control) : null;
    };
}

}
