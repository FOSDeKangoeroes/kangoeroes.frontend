import { Serializer } from 'projects/kangoeroes-frontend-core/src/lib/data-service/serializer';
import { Period } from './period.model';

export class PeriodSerializer implements Serializer<Period> {

    fromJson(json: any): Period {
        const newPeriod = new Period();

        newPeriod.id = json.id;
        newPeriod.name = json.name;
        newPeriod.end = json.end;
        newPeriod.start = json.start;
        newPeriod.displayName = json.name;

        return newPeriod;
    }

    toJson(resource: Period) {
        throw new Error('Method not implemented.');
    }


}
