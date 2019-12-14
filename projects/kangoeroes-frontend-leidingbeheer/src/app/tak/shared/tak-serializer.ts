import { Serializer } from 'projects/kangoeroes-frontend-core/src/lib/data-service/serializer';
import { Tak } from './tak.model';

export class TakSerializer implements Serializer<Tak> {

    fromJson(json: any): Tak {
        const newTak = new Tak();

        newTak.displayName = json.naam;
        newTak.leidingCount = json.leidingCount;
        newTak.naam = json.naam;
        newTak.volgorde = json.volgorde;
        newTak.id = json.id;

        return newTak;

    }    toJson(resource: Tak) {
        throw new Error('Method not implemented.');
    }
}
