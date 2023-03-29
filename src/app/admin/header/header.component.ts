import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TokenService} from "../../services/token.service";
import {ProduitService} from "../../services/produit.service";
import {Products} from "../../interfaces/Products";
import {Produit} from "../../interfaces/Produit";
import {ProductsService} from "../../services/products.service";
import {Router} from "@angular/router";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";


declare var window: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  product!: Products;
  formModal: any;
  @ViewChild('exampleModal', { static: false }) exampleModal!: ElementRef;


  nom!:string;
  constructor(private tokenService:TokenService,private produitService:ProduitService,     public sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {


    setTimeout(() => {
      const modalElement = document.querySelector('#exampleModal');
      if (modalElement) {
        this.formModal = new window.bootstrap.Modal(modalElement);
      }
    }, 1000);
  }


  openModal(product: Produit) {
    if (this.formModal) {
      this.formModal.show();
    }
  }


  doSomthing() {
    this.formModal.hide();
  }

  //on fait appele a DeleteToken de service token
logout() : void
{
  this.tokenService.DeleteTokenForlogout();
  window.location.href = '/auth/login';
}

  search() {
    this.produitService.geProduitByNom(this.nom)
      .subscribe((product: any) => {
        this.product = product;
        if (this.formModal) {
          this.formModal.show();
        }
      });
  }

}











