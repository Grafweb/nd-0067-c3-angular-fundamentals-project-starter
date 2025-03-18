import { Component, inject, input, output } from '@angular/core';
import { BookCart, CartService } from '../../services/cart.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-item',
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
  ],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  book = input.required<BookCart>();
  bookChange = output<BookCart>();
  private _cartService = inject(CartService);

  quantityChange(): void {
    console.log('cart parent');
    this.bookChange.emit(this.book());
    //this._cartService.addToCart(book, book.quantity);
  }
}
