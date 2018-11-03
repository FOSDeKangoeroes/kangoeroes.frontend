
import { Adjective } from './adjective.model';
import { ResourceFactory } from 'projects/kangoeroes-frontend-core/src/lib/core-data-service/resource-factory';
export class AdjectiveFactory implements ResourceFactory<Adjective> {
    create(data: string): Adjective {
       const adjective = new Adjective();
       adjective.naam = data;

       return adjective;
    }
}
