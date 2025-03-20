import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

//define all routes
export const routes: Routes = [
  { path: 'product-list/:id', component: ProductItemDetailComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: '', redirectTo: '/product-list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
