import * as moment from 'moment';

export function convertDate(date: Date) {
  return  moment(date).format('YYYY-MM-DD');
}
