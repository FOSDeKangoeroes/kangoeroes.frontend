import { ResourceService } from 'projects/kangoeroes-frontend-core/src/lib/data-service/resource-service';
import { Orderline } from './orderline.model';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'projects/kangoeroes-frontend-core/src/lib/config/config.service';
import { Injectable } from '@angular/core';
import { OrderlineSerializer } from './orderline-serializer';

@Injectable({
    providedIn: 'root'
})
export class OrderlineDataService extends ResourceService<Orderline> {


    constructor(httpClient: HttpClient, configService: ConfigService) {
        const url = `${configService.get().appUrl}/api`;
        const endpoint = 'orderline';
        super(httpClient, url, endpoint, new OrderlineSerializer());

    }
}
