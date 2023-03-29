import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";


const baseUrl = 'http://localhost:8181/api/produits';

@Injectable({
  providedIn: 'root'
})
export class CrudserviceService {

  constructor(private http: HttpClient) { }


  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

}
