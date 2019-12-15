import * as moment from 'moment';

export function convertToDate(date: Date) {
  return  moment(date).format('YYYY-MM-DD');
}

// Calculate the date for 60 days before now.
         export function calculateStartDate(): Date {
           const result = new Date();
           result.setDate(result.getDate() - 60);

           return result;
         }