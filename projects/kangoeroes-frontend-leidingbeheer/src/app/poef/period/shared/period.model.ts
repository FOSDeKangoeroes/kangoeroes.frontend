import { Resource } from 'projects/kangoeroes-frontend-core/src/lib/data-service/resource-model';

export class Period extends Resource {
    name: string;
    start: Date;
    end: Date;
}
