import { ResourceService } from 'projects/kangoeroes-frontend-core/src/lib/data-service/resource-service';
import { Order } from './order.model';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'projects/kangoeroes-frontend-core/src/lib/config/config.service';
import { OrderSerializer } from './order-serializer';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class OrderDataService extends ResourceService<Order> {

    constructor(httpClient: HttpClient, configService: ConfigService) {
        const url = `${configService.get().appUrl}/api`;
        const endpoint = 'order';
        super(httpClient, url, endpoint, new OrderSerializer());
    }
}
