import { Animal } from './animal.model';
import { ResourceFactory } from "../../core/data-services/resource-factory";

export class AnimalFactory implements ResourceFactory<Animal> {
    create(data: string): Animal {
       const newAnimal = new Animal();
        newAnimal.naam = data;

        return newAnimal;
    }

}