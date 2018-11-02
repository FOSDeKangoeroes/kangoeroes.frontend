import { Animal } from '../../totemanimal/shared/animal.model';
import { Adjective } from '../../totemadjective/shared/adjective.model';
import { Resource } from '../../core/data-services/resource-model';
export class TotemEntry extends Resource {
  leidingNaam: string;
  leidingVoornaam: string;
  adjectief: Adjective;
  totem: Animal;
  voorouderTotem: string;
  voorouderAdjectief: string;
  voorouderId: number;
  reuseDateTotem: Date;
  reuseDateAdjectief: Date;
  datumGegeven: Date;
}
