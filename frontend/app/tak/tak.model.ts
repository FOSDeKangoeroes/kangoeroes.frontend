import { Leiding } from '../leiding/leiding.model';


export class Tak {

    id: number;
    naam: string;
    volgorde: number;
    leidingCount: number;

    static fromJSON(json): Tak {
        const tak = new Tak(json.naam, json.volgorde);
        tak.leidingCount = json.leidingCount;
        tak.id = json.id;
        return tak;
    }

    constructor(naam: string, volgorde: number) {
        this.naam = naam;
        this.volgorde = volgorde;
    }

    toJSON() {
        return {
            id: this.id,
            naam: this.naam,
            volgorde: this.volgorde
        };
    }

    public hasLeiding(): boolean {
        return this.leidingCount > 0;
    }
}
