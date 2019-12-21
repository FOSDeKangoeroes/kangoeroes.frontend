import { ResourceService } from 'projects/kangoeroes-frontend-core/src/lib/data-service/resource-service';
import { Period } from './period.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'projects/kangoeroes-frontend-core/src/lib/config/config.service';
import { PeriodSerializer } from './period-serializer';

@Injectable({
    providedIn: 'root'
})
export class PeriodDataService extends ResourceService<Period> {

    constructor(httpClient: HttpClient, configService: ConfigService) {
        const url = `${configService.get().appUrl}/api`;
        const endpoint = 'period';
        super(httpClient, url, endpoint, new PeriodSerializer());

    }
}
