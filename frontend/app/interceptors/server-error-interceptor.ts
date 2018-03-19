import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { SnotifyService } from 'ng-snotify';


@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {

  constructor(private snotifyService: SnotifyService) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).do(event => {

    }, (error) => {
      if (error.status >= 500 && error.status < 600) {
      this.snotifyService.error('Er ging iets fout op de server', 'Server Error 500');
      }
    });
  }
}
