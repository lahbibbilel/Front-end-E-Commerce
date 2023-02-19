import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router : Router) { }

  //methode enregistre le token dans LocaleStorage dans memory pour le verifier dans le quard aprés
  saveToken(token : string) : void
  {
localStorage.setItem('token',token)
    //acceder a interface admin
    this.router.navigate(['admin'])
  }
// on définie ce methode dans le gardiant authguard pour tester si token existe alors ouvre interface admin sinon reste fermer
  //on fait l appelle dans guard.service
  isAuth():boolean
  {
    // si clé n'existe pas sera null ==>token n existe pas sinon true // null=false
const token = localStorage.getItem('token')
    console.log(token)
    return !!token
  }
  //supprimer token de localeStorage pour le deconnecter
  DeleteTokenForlogout():void
  {
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }
  getToken():string | null
  {
    return localStorage.getItem('token')
  }
}
