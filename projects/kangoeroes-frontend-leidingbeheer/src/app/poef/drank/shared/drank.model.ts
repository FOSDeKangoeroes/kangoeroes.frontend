import { Resource } from 'projects/kangoeroes-frontend-core/src/lib/data-service/resource-model';

export class Drank extends Resource {

    typeId: number;
    typeNaam: string;

    naam: string;
    prijs: number;
    inStock: boolean;

}
