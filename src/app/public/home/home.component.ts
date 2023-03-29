import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Produit } from "../../interfaces/Produit";
import { ProduitService } from "../../services/produit.service";
import { Products } from "../../interfaces/Products";
import { ProductsService } from "../../services/products.service";
import { Router } from "@angular/router";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any;
  formModal: any;
  selectedProduct!: Produit;

  @ViewChild('exampleModal', { static: false }) exampleModal!: ElementRef;

  constructor(
    private service: ProductsService,
    private router: Router,
    private produitService: ProduitService,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.service.getProducts().subscribe(response => {
      this.products = response;
    });

    setTimeout(() => {
      const modalElement = document.querySelector('#exampleModal');
      if (modalElement) {
        this.formModal = new window.bootstrap.Modal(modalElement);
      }
    }, 1000);
  }


  openModal(product: Produit) {
    this.selectedProduct = product;
    if (this.formModal) {
      this.formModal.show();
    }
  }


  doSomthing() {
    this.formModal.hide();
  }

  public getSanitizedImageUrl(image: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl('data:image/png;base64,' + image);
  }

}
