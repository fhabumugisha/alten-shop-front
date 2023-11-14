import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import {SharedModule} from '../../shared/shared.module';
import {TagModule} from "primeng/tag";


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule,

  ]
})
export class ProductsModule { }
