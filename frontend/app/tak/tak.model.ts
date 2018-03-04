import { Leiding } from '../leiding/leiding.model';


export class Tak {

    private _id: number;
    private _naam: string;
    private _volgorde: number;
    private _leidingCount: number;

    static fromJSON(json): Tak {
        const tak = new Tak(json.naam, json.volgorde);
        tak._leidingCount = json.leidingCount;
        tak._id = json.id;
        return tak;
    }

    constructor(naam: string, volgorde: number) {
        this._naam = naam;
        this._volgorde = volgorde;
    }

    toJSON() {
        return {
            id: this._id,
            naam: this._naam,
            volgorde: this._volgorde
        };
    }


    get naam() {
        return this._naam;
    }

    set naam(naam: string) {
        this._naam = naam;
    }

    get leidingCount() {
        return this._leidingCount;
    }

    set leiding(leidingCount: number) {
        this._leidingCount = leidingCount;
    }

    get id() {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get volgorde() {
        return this._volgorde;
    }

    set volgorde(volgorde: number) {
        this._volgorde = volgorde;
    }

    public hasLeiding(): boolean {
        return this._leidingCount > 0;
    }
}
