import { Orderline } from './orderline.model';
import { Serializer } from 'projects/kangoeroes-frontend-core/src/lib/data-service/serializer';

export class OrderlineSerializer implements Serializer<Orderline> {
    fromJson(json: any): Orderline {
        const newOrderline = new Orderline();

        newOrderline.id = json.id;
        newOrderline.displayName = `#${json.id}`;
        newOrderline.orderId = json.orderId;
        newOrderline.drankNaam = json.drankNaam;
        newOrderline.orderedFor = json.orderedForNaam;
        newOrderline.drinkPrice = json.drinkPrice;
        newOrderline.priceTotal = json.priceTotal;
        newOrderline.quantity = json.quantity;
        newOrderline.orderCreatedOn = json.orderCreatedOn;
        newOrderline.parentId = json.orderId;

        return newOrderline;
    }

    toJson(resource: Orderline) {
        throw new Error('Method not implemented.');
    }


}
