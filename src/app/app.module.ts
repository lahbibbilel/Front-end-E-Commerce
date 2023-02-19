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

@NgModule({
    declarations: [
        AppComponent,
        PublicComponent,
        HomeComponent,
        ProduitComponent,
        ContactComponent,
        DashboardPublicComponent,
        HeaderComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
  //activer interceptor
    providers: [
      TokenInterceptorProvider
    ],
    exports: [
        HeaderComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
