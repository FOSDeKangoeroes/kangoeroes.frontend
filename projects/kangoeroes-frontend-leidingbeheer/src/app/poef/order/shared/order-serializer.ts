import { Serializer } from 'projects/kangoeroes-frontend-core/src/lib/data-service/serializer';
import { Order } from './order.model';

export class OrderSerializer implements Serializer<Order> {
    fromJson(json: any): Order {
        const newOrder = new Order();

        newOrder.id = json.id;
        newOrder.createdOn = json.createdOn;
        newOrder.orderPrice = json.orderPrice;
        newOrder.orderedByNaam = json.orderedByNaam;
        newOrder.displayName = `#${newOrder.id}`;
        return newOrder;
    }

    toJson(resource: Order) {
        throw new Error('Method not implemented.');
    }

}
