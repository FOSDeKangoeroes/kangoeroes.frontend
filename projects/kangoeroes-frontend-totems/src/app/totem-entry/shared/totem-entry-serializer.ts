import { AnimalSerializer } from '../../totemanimal/shared/animal-serializer';
import { AdjectiveSerializer } from '../../totemadjective/shared/adjective-serializer';
import { TotemEntry } from './totem-entry-model';
import { Serializer } from 'projects/kangoeroes-frontend-core/src/lib/data-service/serializer';


export class TotemEntrySerializer implements Serializer<TotemEntry> {
  private adjectiveSerializer: AdjectiveSerializer;
  private animalSerializer: AnimalSerializer;
  constructor() {
    this.adjectiveSerializer = new AdjectiveSerializer();
    this.animalSerializer = new AnimalSerializer();
  }

  fromJson(json: any): TotemEntry {
    const newEntry = new TotemEntry();

    newEntry.datumGegeven = json.datumGegeven;
    newEntry.adjectief = this.adjectiveSerializer.fromJson(json.adjectief);
    newEntry.totem = this.animalSerializer.fromJson(json.totem);
    newEntry.displayName = `${json.adjectief.naam} ${json.totem.naam}`;
    newEntry.id = json.id;
    newEntry.leidingNaam = json.leidingNaam;
    newEntry.leidingVoornaam = json.leidingVoornaam;
    newEntry.reuseDateAdjectief = json.reuseDateAdjectief;
    newEntry.reuseDateTotem = json.reuseDateTotem;
    newEntry.voorouderAdjectief = json.voorouderAdjectief;
    newEntry.voorouderId = json.voorouderId;
    newEntry.voorouderTotem = json.voorouderTotem;

    return newEntry;
  }

  toJson(resource: any) {
    throw new Error('Method not implemented.');
  }
}
