import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DonneesUser} from "../interfaces/donnees-user";
import {Observable} from "rxjs";
import {IToken} from "../interfaces/itoken";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:8181/api/v1/auth/authenticate';
  constructor(private http : HttpClient) { }
// ce service pour connecter a API
  //login(donnees_User : any) : any
  login(donnees_User : DonneesUser) : Observable<IToken>
  {
  return this.http.post<IToken>(this.url,donnees_User)
  }

  isLoggedIn(): boolean {
    const userString = localStorage.getItem('client');
    if (userString === null) {
      return false;
    }
    const user = JSON.parse(userString);
    return user !== null;
  }



}
