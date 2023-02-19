import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProduitIndexComponent} from "./produit-index/produit-index.component";
import {ProduitEditComponent} from "./produit-edit/produit-edit.component";
import {ProduitAddComponent} from "./produit-add/produit-add.component";
import {ProduitDeleteComponent} from "./produit-delete/produit-delete.component";

const routes: Routes = [
  { path: '',component: ProduitIndexComponent},
  { path: 'edit/:id',component: ProduitEditComponent },
  { path: 'add',component: ProduitAddComponent },
  { path: 'delete/:id',component: ProduitDeleteComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitRoutingModule { }
