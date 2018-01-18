import { Leiding } from '../leiding/leiding.model';
import { leave } from '@angular/core/src/profile/wtf_impl';

export class Tak {

    private _id: number;
    private _naam: string;
    private _volgorde: number;
    private _leiding: Leiding[];

    static fromJSON(json): Tak {
        const tak = new Tak(json.naam, json.volgorde);
        tak._leiding = json.leiding;
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

set naam(naam: string)
{
    this._naam = naam;
}

get leiding() {
    return this._leiding;
}

set leiding(leiding: Leiding[]) {
        this._leiding = leiding;
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
    return this._leiding.length > 0;
}
}
