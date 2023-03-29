import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Panier} from "../interfaces/Panier";
import {Observable} from "rxjs";
import {Product} from "../admin/produit/product";
import {Payment} from "../interfaces/Payment";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private baseUrl = 'http://localhost:8181/Payment';

  constructor(private http: HttpClient) { }

  getAllPayments(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  }
