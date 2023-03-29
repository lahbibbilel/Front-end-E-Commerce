import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProdService {
  private baseUrl = 'http://localhost:8181/api/produits/bymail';

  constructor(private http: HttpClient) { }

  createProduct(product: Product, clientId: number): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}?clientId=${clientId}`, product);
  }

  createbyEmailProduct(product: Product, email: string): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}?email=${email}`, product);
  }


}
