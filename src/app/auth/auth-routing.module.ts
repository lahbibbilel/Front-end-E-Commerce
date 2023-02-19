import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProduitComponent} from "../public/produit/produit.component";
import {ContactComponent} from "../public/contact/contact.component";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";

const routes: Routes = [
  { path: '',redirectTo: 'login',pathMatch:'full' },
  { path: 'login',component: LoginComponent },
  { path: 'logout',component: LogoutComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
