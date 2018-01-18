export class Leiding {
    private _id: number;

    private _takId: number;
    private _takNaam: string;
    static fromJSON(json): Leiding {
        const leiding = new Leiding(json.naam, json.voornaam, json.auth0Id, json.email, json.leidingSinds, json.datumGestopt);
        leiding._id = json.id;
        leiding._takNaam = json.takNaam;
        leiding._takId = json.takId;
        return leiding;
    }

    constructor(private _naam: string,
        private _voornaam: string,
        private _auth0Id?: string,
        private _email?: string,
        private _leidingSinds?: Date,
        private _datumGestopt?: Date,
        takId?: number ) {

        this._takId = takId;
        if (this._leidingSinds === null) {
            this._leidingSinds = new Date(1, 1, 1);
        }
        if (this._datumGestopt === null) {
            this._datumGestopt = new Date(1, 1, 1);
        }
    }

get id() {
    return this._id;
}
    get naam() {
        return this._naam;
    }

    set naam(naam: string) {
        this._naam = naam;
    }

    get voornaam() {
        return this._voornaam;
    }

    set voornaam(voornaam: string) {
        this._voornaam = voornaam;
    }

    get email() {
        return this._email;
    }

    set email(email: string) {
        this._email = email;
    }

    get leidingSinds() {
        return this._leidingSinds;
    }

    set leidingSinds(leidingSinds: Date) {
        if (leidingSinds === null) {
            this._leidingSinds = new Date(1, 1, 1);
        } else {
            this._leidingSinds = leidingSinds;
 }

    }

    get datumGestopt() {
        return this._datumGestopt;
    }

    set datumGestopt(datumGestopt: Date) {
        if (datumGestopt === null) {
            this._datumGestopt = new Date(1, 1, 1);
        } else {
            this._datumGestopt = datumGestopt;
        }
    }
    get takId() {
        return this._takId;
    }

    set takId(takId: number) {
        this._takId = takId;
    }

    get takNaam() {
        return this._takNaam;
    }

    get auth0Id() {
        return this._auth0Id;
    }

    toJSON() {
        return {
            auth0Id: this._auth0Id,
            naam: this.naam,
            voornaam: this._voornaam,
            email: this._email,
            takId: this._takId,
            id: this._id
        };
    }

}
