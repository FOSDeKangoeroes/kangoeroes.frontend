import { Leiding } from './leiding.model';
import { ResourceFactory } from '../core/data-services/resource-factory';

export class LeidingFactory implements ResourceFactory<Leiding> {
    create(data: string): Leiding {
        // Volledige naam opsplitsen in een voor- en achternaam. Er wordt vanuit gegaan dat de voornaam steeds 1 woord is..
        const voornaam = data.substr(0, data.indexOf(' ')); // Alle tekst voor de eerste spatie
        const naam = data.substr(data.indexOf(' ') + 1);

        const leiding = new Leiding();
        leiding.naam = naam;
        leiding.voornaam = voornaam;

        return leiding;
    }

}
