export abstract class Resource {
    id: number;
    displayName: string;
    parentId?: number;

    create(data: any) {
        throw new Error('Can\'t create a Resource. Create one of the subtypes instead.');
    }
}
