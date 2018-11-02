import { ResourceFactory } from '../../core/data-services/resource-factory';
import { Adjective } from './adjective.model';
export class AdjectiveFactory implements ResourceFactory<Adjective> {
    create(data: string): Adjective {
       const adjective = new Adjective();
       adjective.naam = data;

       return adjective;
    }
}
