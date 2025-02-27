import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
  { path: 'product-list', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
];
