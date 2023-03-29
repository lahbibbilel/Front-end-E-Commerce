import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Product} from "../admin/produit/product";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private baseURL = "http://localhost:8181/api/produits";


  constructor(private httpClient: HttpClient) { }

  getPriduitsList(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}`);
  }

  createProduits(product: Product): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, product);
  }

  geProduitById(id: number): Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseURL}/${id}`);
  }

  geProduitByNom(nom: string): Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseURL}/prod/${nom}`);
  }

  updateProduct(id: number, product: Product): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, product);
  }

  deleteProduct(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
