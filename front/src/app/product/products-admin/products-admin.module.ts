import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsAdminRoutingModule } from './products-admin-routing.module';
import { ProductsAdminComponent } from './products-admin.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    ProductsAdminComponent
  ],
    imports: [
        SharedModule,
        ProductsAdminRoutingModule,
    ]
})
export class ProductsAdminModule { }
