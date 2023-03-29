import { Component, OnInit } from '@angular/core';
import { PanierServiceService } from '../../services/panier-service.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";
import {Products} from "../../interfaces/Products";
import {Payment} from "../../interfaces/Payment";
import {HttpClient} from "@angular/common/http";
import {Product} from "../../admin/produit/product";
import {Panier} from "../../interfaces/Panier";
import {Clients} from "../../interfaces/Clients";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  productForm!: FormGroup;
  productId!: number;
  email!: string;
  client: any;
  products!: Product[];
  panierId!: number;

  constructor(
    private fb: FormBuilder,
    private panierService: PanierServiceService,
    private sanitizer: DomSanitizer,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      productId: ['', Validators.required],
      email: ['', Validators.required],
    });

    const clientItem = localStorage.getItem('client');
    if (clientItem) {
      this.client = JSON.parse(clientItem);
      console.log(this.client);

      // fetch the client's products
      this.panierService.getClientProducts(this.client.id).subscribe(
        (products) => {
          this.products = products;
          console.log(this.products);
        },
        (error) => {
          console.log(error);
          alert('Failed to retrieve products for client');
        }
      );
    } else {
      console.log('No client found');
    }
  }

  onSubmit() {
    // read the value of productId and email from the form
    this.productId = parseInt(this.productForm.value.productId);
    this.email = this.productForm.value.email;

    this.panierService.createPanier(this.productForm.value, this.productId, this.email)
      .subscribe(
        (data) => {
          console.log(data);
          alert('Product added to panier');
        },
        (error) => {
          console.log(error);
          alert('Failed to create panier');
        }
      );
  }

  onBuyProduct(product: Product) {
    const payment: Payment = {
      id: product.id,
      product: product,
    };

    this.http.post<Payment>('http://localhost:8181/Payment?productId=' + product.id, payment)
      .subscribe(
        (createdPayment) => {
          console.log(createdPayment);
          alert('Product purchased successfully');
        },
        (error) => {
          console.log(error);
          alert('Failed to purchase product');
        }
      );
  }

  getImageUrl(image: string): any {
    return this.sanitizer.bypassSecurityTrustUrl(`data:image/png;base64, ${image}`);
  }



}
