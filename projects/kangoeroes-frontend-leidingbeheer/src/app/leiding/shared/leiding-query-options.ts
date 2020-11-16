import { QueryOptions } from 'projects/kangoeroes-frontend-core/src/lib/data-service/query-options';

export class LeidingQueryOptions extends QueryOptions {

    public takId: number;
    public tab = false;

    constructor() {
        super();
    }

    toQueryMap( ) {
        const queryMap = new Map<string, string>();
        queryMap.set('pageNumber', `${this.pageNumber}`);
        queryMap.set('pageSize', `${this.pageSize}`);
        queryMap.set('sortBy', `${this.sortBy}`);
        queryMap.set('sortOrder', `${this.sortOrder}`);
        queryMap.set('query', `${this.query}`);
        queryMap.set('tab', `${this.tab}`)

        if (this.takId) {
            queryMap.set('tak', `${this.takId}`);
        }

        return queryMap;
    }
}
