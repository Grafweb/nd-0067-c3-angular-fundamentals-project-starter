import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';

export const routes: Routes = [
  { path: 'product-list/:id', component: ProductItemDetailComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
];
