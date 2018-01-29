export class BadRequestResponse {
    private _errors: string[];

   public static fromJSON(json): BadRequestResponse {
        const  response = new BadRequestResponse();
        response.errors = json.errors;
        return response;
    }

    get errors(): string[] {
        return this._errors;
    }

    set errors(errors: string[])
    {
        this._errors = errors;
    }
}
