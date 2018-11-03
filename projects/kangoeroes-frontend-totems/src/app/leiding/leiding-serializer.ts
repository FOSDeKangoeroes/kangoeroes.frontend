import { Leiding } from './leiding.model';
import { Serializer } from 'projects/kangoeroes-frontend-core/src/lib/core-data-service/serializer';

export class LeidingSerializer implements Serializer<Leiding> {
  fromJson(json: any): Leiding {
    const newLeiding = new Leiding();

    newLeiding.id = json.id;
    newLeiding.naam = json.naam;
    newLeiding.voornaam = json.voornaam;
    newLeiding.displayName = `${json.voornaam} ${json.naam}`;

    return newLeiding;
  }
  toJson(resource: Leiding) {
    throw new Error('Method not implemented.');
  }
}
