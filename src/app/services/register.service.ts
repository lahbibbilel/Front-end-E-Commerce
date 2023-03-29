import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IToken} from "../interfaces/itoken";
import {DonneesUser} from "../interfaces/donnees-user";
import {Register} from "../interfaces/register";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url = 'http://localhost:8181/api/v1/auth/register';
  constructor(private http : HttpClient) { }
// ce service pour connecter a API
  //login(donnees_User : any) : any


  register(register : Register) : Observable<IToken>
  {
    return this.http.post<IToken>(this.url,register)
  }
}
