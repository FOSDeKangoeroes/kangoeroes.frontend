import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noDate'
})
export class NoDatePipe implements PipeTransform {

  private readonly dateTotest = new Date('0001-01-01').toISOString();

  transform(value: any, args?: any): any {
    if (value !== this.dateTotest) {
      return value;
    }
    return 'n.v.t.';
  }

}
