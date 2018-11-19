export class Tak {

    id: number;
    naam: string;
    volgorde: number;
    leidingCount: number;

    public hasLeiding(): boolean {
        return this.leidingCount > 0;
    }
}
