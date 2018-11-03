import { Resource } from './resource-model';
export interface Serializer<T extends Resource> {
    fromJson(json: any): T;
    toJson(resource: T): any;
}
