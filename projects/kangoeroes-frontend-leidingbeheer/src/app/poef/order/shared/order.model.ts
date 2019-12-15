import { Resource } from 'projects/kangoeroes-frontend-core/src/lib/data-service/resource-model';

export class Order extends Resource {
    orderedByNaam: string;
    orderPrice: number;
    createdOn: Date;
}
