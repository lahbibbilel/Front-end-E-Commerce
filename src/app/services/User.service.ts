import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private url = 'http://localhost:8181/users/users';

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get(this.url);
  }

  getUser() {
    return this.http.get('http://localhost:8181/users')
  }
}
