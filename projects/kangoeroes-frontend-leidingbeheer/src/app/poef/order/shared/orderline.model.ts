import { Resource } from 'projects/kangoeroes-frontend-core/src/lib/data-service/resource-model';

export class Orderline extends Resource {
    orderId: number;
    drankNaam: string;
    orderedFor: string;
    drinkPrice: number;
    priceTotal: number;
    quantity: number;
    orderCreatedOn: Date;
}
