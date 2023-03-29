import { Component, OnInit } from '@angular/core';
import {ProduitService} from "../services/produit.service";
import {Products} from "../interfaces/Products";
import {HttpClient} from "@angular/common/http";
import {Product} from "../admin/produit/product";

@Component({
  selector: 'app-dashboard-client',
  templateUrl: './dashboard-client.component.html',
  styleUrls: ['./dashboard-client.component.css']
})
export class DashboardClientComponent implements OnInit {
  products!: Product[];

  constructor(private http: HttpClient) { }

  search(clientName: string) {
    this.http.get<Product[]>('http://localhost:8181/api/produits/products', { params: { clientName } })
      .subscribe(products => this.products = products);
  }


  ngOnInit(): void {
  }
}
