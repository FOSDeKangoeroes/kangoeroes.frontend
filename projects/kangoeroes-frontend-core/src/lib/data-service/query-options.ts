export interface IQueryBuilder {
  toQueryMap: () => Map<string, string>;
  toQueryString: () => string;
}

export interface ParentEntity {
  name: string;
  value: number;
}

export class QueryOptions implements IQueryBuilder {
  public pageNumber: number;
  public pageSize: number;
  public sortBy: string;
  public sortOrder: string;
  public query: string;
  public parentEntity?: ParentEntity;

  constructor() {
    this.pageNumber = 1;
    this.pageSize = 100;
    this.sortBy = '';
    this.sortOrder = '';
    this.query = '';
  }

  toQueryMap() {
    const queryMap = new Map<string, string>();
    queryMap.set('pageNumber', `${this.pageNumber}`);
    queryMap.set('pageSize', `${this.pageSize}`);
    queryMap.set('sortBy', `${this.sortBy}`);
    queryMap.set('sortOrder', `${this.sortOrder}`);
    queryMap.set('query', `${this.query}`);

    if (this.parentEntity) {
      queryMap.set(`${this.parentEntity.name}`, `${this.parentEntity.value}`);
    }
    return queryMap;
  }

  toQueryString() {
    let queryString = '';
    this.toQueryMap().forEach((value: string, key: string) => {
      queryString = queryString.concat(`${key}=${value}&`);
    });

    return queryString.substring(0, queryString.length - 1);
  }
}
