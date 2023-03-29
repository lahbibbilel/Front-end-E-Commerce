import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./public/home/home.component";
import {ProduitComponent} from "./public/produit/produit.component";
import {ContactComponent} from "./public/contact/contact.component";
import {DashboardPublicComponent} from "./dashboard-public/dashboard-public.component";
import {ErrorComponent} from "./errors/error/error.component";
import {AuthGuard} from "./guard/auth.guard";
import {RegisterComponent} from "./auth/register/register.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {ChatComponent} from "./admin/chat/chat.component";
import {ClientComponent} from "./client/client.component";
import {AuthClientComponent} from "./auth-client/auth-client.component";
import {DashboardClientComponent} from "./dashboard-client/dashboard-client.component";
import {ClientGuard} from "./guard/client.guard";
import {PanierComponent} from "./dashboard-client/panier/panier.component";
import {ProdTestComponent} from "./public/prod-test/prod-test.component";

const routes: Routes = [
  { path: '',component: DashboardPublicComponent, children : [
  { path: '',redirectTo: 'home', pathMatch: "full"},
  { path: 'home',component: HomeComponent},
  { path: 'produit',component: ProduitComponent },
  { path: 'contact',component: ContactComponent},
      { path: 'register',component: RegisterComponent},
      { path: 'contact-us',component: ContactUsComponent},
      { path: 'client',component: ClientComponent},
      { path: 'client-auth',component: AuthClientComponent},

    ]
  },
  { path: 'dashboard-client', component: DashboardClientComponent, canActivate: [ClientGuard] },
  { path: 'panier',component: PanierComponent, canActivate: [ClientGuard]},
  { path: 'test',component: ProdTestComponent},
  {path : 'admin',loadChildren:() =>import('./admin/admin.module').then(m=>m.AdminModule),canActivate:[AuthGuard]},
  {path : 'auth',loadChildren:() =>import('./auth/auth.module').then(m=>m.AuthModule)},
  { path: '**',component: ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
