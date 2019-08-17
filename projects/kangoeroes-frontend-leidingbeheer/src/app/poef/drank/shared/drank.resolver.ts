import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Drank } from "./drank.model";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DrankDataService } from "./drank-data.service";

@Injectable({
    providedIn: 'root'
})
export class DrankResolver implements Resolve<Drank> {

    constructor(private drankDataService: DrankDataService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Drank> {
        return this.drankDataService.read(route.params['id']);
    }

}
