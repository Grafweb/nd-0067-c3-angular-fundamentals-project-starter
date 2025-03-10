import { Component, inject, WritableSignal } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CartService } from '../../services/cart.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-cart',
  imports: [MatGridListModule, MatInputModule, MatFormFieldModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  private _cartService = inject(CartService);
  books = this._cartService.books;
}
