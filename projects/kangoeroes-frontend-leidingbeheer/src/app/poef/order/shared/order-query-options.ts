import { QueryOptions } from 'projects/kangoeroes-frontend-core/src/lib/data-service/query-options';
import { convertDate } from 'projects/kangoeroes-frontend-core/src/lib/utils';


export class OrderQueryOptions extends QueryOptions {
         public start: Date;
         public end: Date;

         // If there are no parameters provided, take a filter for the last 30 days, with a max of a 100 results.
         constructor(
           start: Date = new Date(),
           end: Date = OrderQueryOptions.getDefaultEndDate()
         ) {
           super();
           super.pageSize = 100;
           super.sortBy = 'createdOn';
           super.sortOrder = 'desc';
           this.start = start;
           this.end = end;
         }

         // Calculate the date for 30 days from now.
         private static getDefaultEndDate(): Date {
           const result = new Date();
           result.setDate(result.getDate() + 30);

           return result;
         }

         toQueryMap() {
           const queryMap = new Map<string, string>();
           queryMap.set('pageNumber', `${this.pageNumber}`);
           queryMap.set('pageSize', `${this.pageSize}`);
           queryMap.set('sortBy', `${this.sortBy}`);
           queryMap.set('sortOrder', `${this.sortOrder}`);


           queryMap.set('query', `${this.query}`);
           queryMap.set('start', `${convertDate(this.start)}`);
           queryMap.set('end', `${convertDate(this.end)}`);

           return queryMap;
         }
       }
