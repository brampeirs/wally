import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable()
export class EndpointUrlInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {



    let newUrl = req.url;
    if (req.url.indexOf('http') === -1 && req.url.indexOf('./') === -1) {
      console.log('origin', environment['origin'], environment);
      newUrl = environment['origin'] + req.url;
    } else {
      newUrl = req.url;
      // newUrl = req.url.replace('http://', 'https://');
    }

    const newReq = req.clone({
      url: newUrl
    });
    return next.handle(newReq);
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
