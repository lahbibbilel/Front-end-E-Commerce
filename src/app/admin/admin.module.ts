import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserIndexComponent } from './user/user-index/user-index.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';
import { HeaderComponent } from './header/header.component';
import { ChatComponent } from './chat/chat.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FooterComponent } from './footer/footer.component';


@NgModule({
    declarations: [
        MenuComponent,
        DashboardComponent,
        UserIndexComponent,
        UserEditComponent,
        UserAddComponent,
        UserDeleteComponent,
        HeaderComponent,
        ChatComponent,
        FooterComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AdminModule { }
