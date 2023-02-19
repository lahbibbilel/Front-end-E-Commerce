import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {MenuComponent} from "./menu/menu.component";

const routes: Routes = [
  {
    path: '',component:MenuComponent,children:
    [
      {path: '',redirectTo:'dashboard',pathMatch:'full'},
      {path: 'dashboard',component: DashboardComponent},
      {path : 'user',loadChildren:() =>import('./user/user.module').then(m=>m.UserModule)},
      {path : 'produit',loadChildren:() =>import('./produit/produit.module').then(m=>m.ProduitModule)},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
