import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  private url = 'http://localhost:8181/api/produits';

  constructor(private http: HttpClient) {
  }

  getProducts() {
    return this.http.get(this.url);
  }
}
