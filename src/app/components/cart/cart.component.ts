import { Component, inject, WritableSignal } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { BookCart, CartService } from '../../services/cart.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-cart',
  imports: [MatGridListModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  private _cartService = inject(CartService);
  books = this._cartService.books;
}
