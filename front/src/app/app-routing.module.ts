import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'products', loadChildren: () => import('./product/products/products.module').then(m => m.ProductsModule) },

{ path: 'admin/products', loadChildren: () => import('./product/products-admin/products-admin.module').then(m => m.ProductsAdminModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
