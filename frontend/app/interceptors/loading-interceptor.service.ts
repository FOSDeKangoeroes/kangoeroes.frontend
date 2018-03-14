import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpEventType } from '@angular/common/http';
import { LoadingService } from '../shared/loading.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';


@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.startLoading();
    return next.handle(req).do((e) => {
      if (e.type === HttpEventType.Response) { this.loadingService.stopLoading(); }
    });
  }
}
