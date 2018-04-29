export interface Leiding {
    id: number;

    takId: number;
    takNaam: string;

    naam: string;
    voornaam: string;
    auth0Id?: string;
    email?: string;
    leidingSinds?: Date;
    datumGestopt?: Date;


}
