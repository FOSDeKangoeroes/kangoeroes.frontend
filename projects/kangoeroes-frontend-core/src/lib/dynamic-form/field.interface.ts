import { ResourceService } from '../data-service/resource-service';
import { Resource } from '../data-service/resource-model';
import { ResourceFactory } from '../data-service/resource-factory';

/**
 * Interface voor het dynamisch meegeven van validatie aan een dynamisch opgebouwd formulierveld
 */
export interface Validator {
    name: string;
    validator: any;
    /**Error message om weer te geven wanneer de validatie faalt. */
    message: string;
}

/**
 * Configuratie van een formulierveld
 */
export interface FieldConfig {
    label?: string;
    name?: string;
    inputType: string;
    options?: string;
    type: string;
    value?: any;
    validations?: Validator[];
    dataService: ResourceService<Resource>;
    resourceFactory: ResourceFactory<Resource>;
    columns?: number;
}
