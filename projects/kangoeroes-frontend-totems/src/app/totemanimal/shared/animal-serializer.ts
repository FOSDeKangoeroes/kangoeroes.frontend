
import { Animal } from './animal.model';
import { Serializer } from 'projects/kangoeroes-frontend-core/src/lib/data-service/serializer';

export class AnimalSerializer implements Serializer<Animal> {

  fromJson(json: any): Animal {
    const newAnimal = new Animal();

    newAnimal.createdOn = json.createdOn;
    newAnimal.displayName = json.naam;
    newAnimal.id = json.id;
    newAnimal.naam = json.naam;

    return newAnimal;
  }
  toJson(resource: Animal) {
    return {
        id: resource.id,
        naam: resource.naam,
        createdOn: resource.createdOn
    };
  }
}
