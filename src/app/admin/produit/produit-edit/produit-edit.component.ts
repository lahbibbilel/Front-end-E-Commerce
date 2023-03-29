import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../product";
import {ProduitService} from "../../../services/produit.service";

@Component({
  selector: 'app-produit-edit',
  templateUrl: './produit-edit.component.html',
  styleUrls: ['./produit-edit.component.css']
})
export class ProduitEditComponent implements OnInit {

  id!: number;
  product: Product = new Product();
  constructor(private productService: ProduitService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.productService.geProduitById(this.id).subscribe(data => {
      this.product = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.productService.updateProduct(this.id, this.product).subscribe( data =>{
        this.goToEmployeeList();
      }
      , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/admin/produit']);
  }

}
