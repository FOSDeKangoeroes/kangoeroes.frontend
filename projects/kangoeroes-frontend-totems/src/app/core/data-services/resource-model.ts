export abstract class Resource {
    id: number;
    displayName: string;

    create(data: any) {
        throw new Error('Can\'t create a Resource. Create one of the subtypes instead.');
    }
}
