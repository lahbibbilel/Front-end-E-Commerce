import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { Products } from '../../interfaces/Products';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
import { ProduitService } from '../../services/produit.service';
import { DomSanitizer } from '@angular/platform-browser';
import { PaymentService } from '../../services/payment.service';
import { Payments } from '../../interfaces/Payments';
import { Product } from '../produit/product';
import { Client } from '../../interfaces/Client';
import { ClientService } from '../../services/client.service';
import { Clients } from '../../interfaces/Clients';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  payments!: Payments[];
  totalCost: number = 0;
  clients!: Client[];

  constructor(
    private tokenService: TokenService,
    private service: PaymentService,
    private productService: ProduitService,
    private clientList: ClientService
  ) {}

  ngOnInit(): void {
    this.service.getAllPayments().subscribe((data) => {
      this.payments = data;
      this.calculateTotalCost();
    });

    this.getClient();
  }

  getClient(): void {
    this.clientList.getClientsList().subscribe((data) => {
      this.clients = data;
    });
  }

  calculateTotalCost(): void {
    this.totalCost = 0;
    for (let payment of this.payments) {
      if (payment.product?.prix) {
        this.totalCost += payment.product.prix;
      }
    }
  }

  //on fait appel a DeleteToken de service token
  logout(): void {
    this.tokenService.DeleteTokenForlogout();
  }
}
