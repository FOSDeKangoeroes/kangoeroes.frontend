import { Animal } from './animal.model';
import { ResourceFactory } from 'projects/kangoeroes-frontend-core/src/lib/data-service/resource-factory';


export class AnimalFactory implements ResourceFactory<Animal> {
    create(data: string): Animal {
       const newAnimal = new Animal();
        newAnimal.naam = data;

        return newAnimal;
    }

}