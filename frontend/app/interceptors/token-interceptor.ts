import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       req = req.clone({
           setHeaders: {
               Authorization: `Bearer ${this.authService.getToken()}`
           }
       });

      return next.handle(req);

    }
}
