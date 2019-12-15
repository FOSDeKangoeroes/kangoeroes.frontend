import { SubResourceService } from 'projects/kangoeroes-frontend-core/src/lib/data-service/sub-resource-service';
import { Drank } from '../../drank/shared/drank.model';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'projects/kangoeroes-frontend-core/src/lib/config/config.service';
import { DrankSerializer } from '../../drank/shared/drank-serializer';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DrankTypeSubDataService extends SubResourceService<Drank> {

    constructor(httpClient: HttpClient, configService: ConfigService) {
        const url = `${configService.get().appUrl}/api`;
        const parentEndPoint = 'dranktype';
        const endpoint = 'dranken';

        super(httpClient, url, parentEndPoint, endpoint, new DrankSerializer());

    }
}
