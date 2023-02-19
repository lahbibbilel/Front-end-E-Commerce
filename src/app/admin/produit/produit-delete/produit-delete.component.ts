import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-produit-delete',
  templateUrl: './produit-delete.component.html',
  styleUrls: ['./produit-delete.component.css']
})
export class ProduitDeleteComponent implements OnInit {

  constructor(private activated: ActivatedRoute) { }

  ngOnInit(): void {
    this.activated.params.subscribe(
      (data)=>{
        console.log(data)
      }
    )
  }

}
