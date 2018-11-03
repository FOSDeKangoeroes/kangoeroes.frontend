import { Animal } from '../../totemanimal/shared/animal.model';
import { Adjective } from '../../totemadjective/shared/adjective.model';
import { Resource } from 'projects/kangoeroes-frontend-core/src/lib/core-data-service/resource-model';

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
