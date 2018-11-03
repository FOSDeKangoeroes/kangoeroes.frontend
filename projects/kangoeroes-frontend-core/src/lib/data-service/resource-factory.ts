import { Resource } from './resource-model';

export interface ResourceFactory<T extends Resource> {

    create(data: any): T;
}
