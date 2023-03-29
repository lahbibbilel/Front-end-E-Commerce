import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../admin/produit/product";
import {Observable} from "rxjs";
import {Panier} from "../interfaces/Panier";
import {Payment} from "../interfaces/Payment";

@Injectable({
  providedIn: 'root'
})
export class PanierServiceService {


  private baseUrl = 'http://localhost:8181/Panier';

  constructor(private http: HttpClient) { }


  createPanier(panier: Panier, panierId: number, email: string): Observable<Panier> {
    return this.http.post<Panier>(`${this.baseUrl}?productId=${panierId}&email=${email}`, panier);
  }


  getClientProducts(clientId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/client/${clientId}/products`);
  }



}
