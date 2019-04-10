import { Resource } from 'projects/kangoeroes-frontend-core/src/lib/data-service/resource-model';


export class Leiding extends Resource {
    naam: string;
    voornaam: string;
    takId: number;
    datumGestopt: Date;
    leidingSinds: string;
    email: string;
}
