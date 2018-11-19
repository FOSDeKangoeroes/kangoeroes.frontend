import { Leiding } from './leiding.model';
import { Serializer } from 'projects/kangoeroes-frontend-core/src/lib/data-service/serializer';

export class LeidingSerializer implements Serializer<Leiding> {
         fromJson(json: any): Leiding {
           const newLeiding = new Leiding();

           newLeiding.auth0Id = json.auth0Id;
           newLeiding.datumGestopt = json.datumGestopt;
           newLeiding.displayName = `${json.voornaam} ${json.naam}`;
           newLeiding.email = json.email;
           newLeiding.id = json.id;
           newLeiding.leidingSinds = json.leidingSinds;
           newLeiding.naam = json.naam;
           newLeiding.takId = json.takId;
           newLeiding.takNaam = json.takNaam;
           newLeiding.voornaam = json.voornaam;

           return newLeiding;
         }
         toJson(resource: Leiding) {
           throw new Error('Method not implemented.');
         }
       }
