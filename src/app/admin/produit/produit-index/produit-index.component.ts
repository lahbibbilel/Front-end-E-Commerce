import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../../services/products.service";
import {Router} from "@angular/router";
import {ProduitService} from "../../../services/produit.service";
import {DomSanitizer} from "@angular/platform-browser";
import {Products} from "../../../interfaces/Products";

@Component({
  selector: 'app-produit-index',
  templateUrl: './produit-index.component.html',
  styleUrls: ['./produit-index.component.css']
})
export class ProduitIndexComponent implements OnInit {

  products:any;
  product!: Products;

  productId!: number;

  constructor(private service:ProductsService,
              private router: Router,private produitService:ProduitService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.service.getProducts()
      .subscribe(response => {
        this.products = response;
      });
  }

  search() {
    this.produitService.geProduitById(this.productId)
      .subscribe((product: any) => {
        this.product = product;
      });
  }


  updateProduct(id: number){
    this.router.navigate(['/admin/produit/edit', id]);
  }

  private getProducts(){
    this.produitService.getPriduitsList().subscribe(data => {
      this.products = data;
    });
  }

  deleteProduct(id: number){
    this.produitService.deleteProduct(id).subscribe( data => {
      console.log(data);
      this.getProducts();
    })
  }
  getImageUrl(image: string): any {
    return this.sanitizer.bypassSecurityTrustUrl(`data:image/png;base64, ${image}`);
  }
}
