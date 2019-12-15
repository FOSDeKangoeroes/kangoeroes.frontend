import * as moment from 'moment';

export function convertToDate(date: Date) {
  return  moment(date).format('YYYY-MM-DD');
}
