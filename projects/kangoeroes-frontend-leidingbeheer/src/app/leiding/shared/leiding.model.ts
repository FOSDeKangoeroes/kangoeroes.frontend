import { Resource } from 'projects/kangoeroes-frontend-core/src/lib/data-service/resource-model';

export class Leiding extends Resource {

    takId: number;
    takNaam: string;

    naam: string;
    voornaam: string;
    auth0Id?: string;
    email?: string;
    leidingSinds?: Date;
    datumGestopt?: Date;


}
