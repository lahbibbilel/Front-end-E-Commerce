import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { HomeComponent } from './public/home/home.component';
import { ProduitComponent } from './public/produit/produit.component';
import { ContactComponent } from './public/contact/contact.component';
import { DashboardPublicComponent } from './dashboard-public/dashboard-public.component';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './errors/error/error.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TokenInterceptorProvider} from "./interceptor/token.interceptor";
import {RegisterComponent} from "./auth/register/register.component";
import { ContactUsComponent } from './contact-us/contact-us.component';
import {WebSocketService} from "./services/WebSocket.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ClientComponent } from './client/client.component';
import { AuthClientComponent } from './auth-client/auth-client.component';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { ProductComponent } from './dashboard-client/product/product.component';
import { PanierComponent } from './dashboard-client/panier/panier.component';
import { ProdTestComponent } from './public/prod-test/prod-test.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderClientComponent } from './dashboard-client/header-client/header-client.component';
import { FooterClientComponent } from './dashboard-client/footer-client/footer-client.component';
@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    HomeComponent,
    ProduitComponent,
    ContactComponent,
    DashboardPublicComponent,
    HeaderComponent,
    ErrorComponent,
    ContactUsComponent,
    ClientComponent,
    AuthClientComponent,
    DashboardClientComponent,
    ProductComponent,
    PanierComponent,
    ProdTestComponent,
    FooterComponent,
    HeaderClientComponent,
    FooterClientComponent,
    HeaderClientComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
  //activer interceptor
    providers: [
      TokenInterceptorProvider,
      WebSocketService
    ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
