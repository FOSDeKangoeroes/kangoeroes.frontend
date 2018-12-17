import { Serializer } from 'projects/kangoeroes-frontend-core/src/lib/data-service/serializer';
import { Drank } from './drank.model';

export class DrankSerializer implements Serializer<Drank> {
  fromJson(json: any): Drank {
    const newDrank = new Drank();
    newDrank.id = json.id;
    newDrank.inStock = json.inStock;
    newDrank.naam = json.naam;
    newDrank.prijs = json.prijs;
    newDrank.typeId = json.typeId;
    newDrank.typeNaam = json.typeNaam;
    newDrank.displayName = json.naam;

    return newDrank;
  }
  toJson(resource: Drank) {
    throw new Error('Method not implemented.');
  }
}
