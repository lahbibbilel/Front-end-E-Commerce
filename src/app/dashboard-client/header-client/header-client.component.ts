import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Products} from "../../interfaces/Products";
import {TokenService} from "../../services/token.service";
import {ProduitService} from "../../services/produit.service";
import {DomSanitizer} from "@angular/platform-browser";
import {Produit} from "../../interfaces/Produit";

declare var window: any;
@Component({
  selector: 'app-header-client',
  templateUrl: './header-client.component.html',
  styleUrls: ['./header-client.component.css']
})
export class HeaderClientComponent implements OnInit {

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


  logout() {
    localStorage.removeItem('client');
    window.location.href = '/client-auth';
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
