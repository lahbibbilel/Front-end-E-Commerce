import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {TokenService} from "../services/token.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router,
              private tokenservice: TokenService
              ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    //test sur token a partir de l appelle a la methode isAuth de tokenservice
    //le guardiant retourner toujours vers auth si token n 'existe pas il fait
    // le test qui verifier le token de local storage qui nous avons enregistrer dans saveToken
    let test = this.tokenservice.isAuth()
    console.log(test)
    if(test)
    {
      return true
    }
    return this.router.navigate(['auth'])
  }

}
