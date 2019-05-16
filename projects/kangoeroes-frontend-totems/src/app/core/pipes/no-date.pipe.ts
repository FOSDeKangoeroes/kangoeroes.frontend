import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noDate'
})
export class NoDatePipe implements PipeTransform {
  private readonly dateTotest = '0001-01-01T00:00:00';

  transform(value: string, date?: string): any {
    if (date !== this.dateTotest) {
      return value;
    }
    return 'Onbekend';
  }
}
