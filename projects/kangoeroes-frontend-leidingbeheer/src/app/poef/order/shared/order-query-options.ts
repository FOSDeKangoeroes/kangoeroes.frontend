import { QueryOptions } from 'projects/kangoeroes-frontend-core/src/lib/data-service/query-options';
import { convertToDate, calculateStartDate } from 'projects/kangoeroes-frontend-core/src/lib/utils';


export class OrderQueryOptions extends QueryOptions {
         public start: Date;
         public end: Date;

         // If there are no parameters provided, take a filter for the last 30 days, with a max of a 100 results.
         constructor(
           start: Date = calculateStartDate(),
           end: Date = new Date()
         ) {
           super();
           this.pageSize = 100;
           this.sortBy = 'createdOn';
           this.sortOrder = 'desc';
           this.start = start;
           this.end = end;
         }

         toQueryMap() {
           const queryMap = new Map<string, string>();
           queryMap.set('pageNumber', `${this.pageNumber}`);
           queryMap.set('pageSize', `${this.pageSize}`);
           queryMap.set('sortBy', `${this.sortBy}`);
           queryMap.set('sortOrder', `${this.sortOrder}`);


           queryMap.set('query', `${this.query}`);
           queryMap.set('start', `${convertToDate(this.start)}`);
           queryMap.set('end', `${convertToDate(this.end)}`);

           return queryMap;
         }
       }
