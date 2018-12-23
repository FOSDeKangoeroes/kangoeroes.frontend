import { Serializer } from 'projects/kangoeroes-frontend-core/src/lib/data-service/serializer';
import { DrankType } from './drank-type-model';

export class DrankTypeSerializer implements Serializer<DrankType> {
    fromJson(json: any): DrankType {
        const newType = new DrankType();

        newType.id = json.id;
        newType.naam = json.naam;
        newType.displayName = json.naam;

        return newType;
    }

    toJson(resource: DrankType) {
        throw new Error('Method not implemented.');
    }


}
