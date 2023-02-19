import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {TokenService} from "../services/token.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
//appel au service pour recuperer token
  constructor(private tokenService : TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request)
    //appele a la token
    const token=this.tokenService.getToken()
    //si le token a insérer dans le header
    if (token!==null)
    {
      //modifier l'entete (header de request)
      let clone=request.clone(
        {
          headers:request.headers.set('Authorization','bearer '+token)
        })
      console.log(clone)
return next.handle(clone)
    }

    return next.handle(request);
  }
}
export const TokenInterceptorProvider = {
  //exporter token interceptor provider
  provide: HTTP_INTERCEPTORS,
  //on utilise cette classe
  useClass: TokenInterceptor,
  //par tous
  multi: true
}
