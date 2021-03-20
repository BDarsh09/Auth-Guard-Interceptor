import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authentication:AuthenticationService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("RUTVI")
    const token = this.authentication.getAuthToken();
    let newHeaders = req.headers;

    if(token){
      newHeaders = newHeaders.append('authtoken',token);
    }
    let authreq = req.clone({headers:newHeaders});
    return next.handle(authreq);
  }
}
