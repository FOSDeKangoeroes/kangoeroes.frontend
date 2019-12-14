import { Resource } from 'projects/kangoeroes-frontend-core/src/lib/data-service/resource-model';

export class Tak extends Resource {

    naam: string;
    volgorde: number;
    leidingCount: number;

    public hasLeiding(): boolean {
        return this.leidingCount > 0;
    }
}
