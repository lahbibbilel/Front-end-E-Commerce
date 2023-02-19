import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./public/home/home.component";
import {ProduitComponent} from "./public/produit/produit.component";
import {ContactComponent} from "./public/contact/contact.component";
import {DashboardPublicComponent} from "./dashboard-public/dashboard-public.component";
import {ErrorComponent} from "./errors/error/error.component";
import {AuthGuard} from "./guard/auth.guard";

const routes: Routes = [
  { path: '',component: DashboardPublicComponent, children : [
  { path: '',redirectTo: 'home', pathMatch: "full"},
  { path: 'home',component: HomeComponent},
  { path: 'produit',component: ProduitComponent },
  { path: 'contact',component: ContactComponent},
    ]
  },
  {path : 'admin',loadChildren:() =>import('./admin/admin.module').then(m=>m.AdminModule),canActivate:[AuthGuard]},
  {path : 'auth',loadChildren:() =>import('./auth/auth.module').then(m=>m.AuthModule)},
  { path: '**',component: ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
