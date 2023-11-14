import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsAdminRoutingModule } from './products-admin-routing.module';
import { ProductsAdminComponent } from './products-admin.component';
import {SharedModule} from "../../shared/shared.module";
import {RadioButtonModule} from "primeng/radiobutton";


@NgModule({
  declarations: [
    ProductsAdminComponent
  ],
    imports: [
        SharedModule,
        ProductsAdminRoutingModule,
        RadioButtonModule
    ]
})
export class ProductsAdminModule { }
