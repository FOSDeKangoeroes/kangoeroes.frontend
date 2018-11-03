
import { Adjective } from './adjective.model';
import { Serializer } from 'projects/kangoeroes-frontend-core/src/lib/data-service/serializer';


export class AdjectiveSerializer implements Serializer<Adjective> {

    fromJson(json: any): Adjective {
        const newAdjective = new Adjective();

        newAdjective.createdOn = json.createdOn;
        newAdjective.id = json.id;
        newAdjective.naam = json.naam;
        newAdjective.displayName = json.naam;

        return newAdjective;

    }    toJson(resource: Adjective) {
        return {
            id: resource.id,
            naam: resource.naam,
            createdOn: resource.createdOn
        };
    }
}
