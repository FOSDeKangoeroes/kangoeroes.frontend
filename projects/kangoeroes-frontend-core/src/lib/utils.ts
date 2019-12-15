import * as moment from 'moment';

export function convertDate(date: Date) {
    console.log(date);
  return  moment(date).format('YYYY-MM-DD');
}
