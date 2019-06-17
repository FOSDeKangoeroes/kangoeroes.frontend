import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class BadRequestInterceptor implements HttpInterceptor {

  constructor(private snackbar: MatSnackBar) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(tap(event => {

    }, (error: HttpErrorResponse) => {
      if (error.status === 400) {
        this.snackbar.open(error.error, null, {
          duration: 3000
        });
      }
    }));

  }

  }
