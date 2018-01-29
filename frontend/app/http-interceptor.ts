import { Http, Request, RequestOptions, RequestOptionsArgs, Response, XHRBackend } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {SnotifyService, SnotifyToastConfig, SnotifyPosition} from 'ng-snotify';
import { BadRequestResponse } from './shared/bad-request-response';

@Injectable()
export class HttpInterceptor extends Http {

  constructor(
    backend: XHRBackend,
    options: RequestOptions,
    public http: Http,
    private snotify: SnotifyService
  ) {
    super(backend, options);
  }
  public request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return super.request(url, options)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {

    // Do messaging and error handling here
    this.showError(error);
    return Observable.throw(error);
  }

  private showError(error: Response) {
   const statusCode = error.status;

   switch (statusCode) {
     case 400:
     const responseModel = BadRequestResponse.fromJSON(error.json());
     let errors = '';
     responseModel.errors.forEach(x => errors +=  x + ' ');
     this.snotify.error(errors, 'Fout', {
      position: SnotifyPosition.rightTop,
      timeout: 0
        });
        break;
        case 500: default:
       this.snotify.error('Oops. Er ging iets fout op de server! Probeer later opnieuw.', 'Serverfout', {
         position: SnotifyPosition.rightTop,
         timeout: 8000
       });
       break;

   }

  }
}


