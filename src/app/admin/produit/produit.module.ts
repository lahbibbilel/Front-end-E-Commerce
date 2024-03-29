import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitRoutingModule } from './produit-routing.module';
import { ProduitIndexComponent } from './produit-index/produit-index.component';
import { ProduitAddComponent } from './produit-add/produit-add.component';
import { ProduitEditComponent } from './produit-edit/produit-edit.component';
import { ProduitDeleteComponent } from './produit-delete/produit-delete.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ProduitIndexComponent,
    ProduitAddComponent,
    ProduitEditComponent,
    ProduitDeleteComponent
  ],
    imports: [
        CommonModule,
        ProduitRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class ProduitModule { }
