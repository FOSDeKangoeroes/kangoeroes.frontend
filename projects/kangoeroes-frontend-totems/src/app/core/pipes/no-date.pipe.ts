import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noDate'
})
export class NoDatePipe implements PipeTransform {

  private readonly dateTotest = new Date('0001-01-01');

  transform(value: string, args?: any): any {
    console.log(value);
    if (value !== '0001') {
      return value;
    }
    return 'Onbekend';
  }

}
