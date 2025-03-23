import { CommonModule } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BookCart, CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  //get book with qantity
  //inject service
  private _cartService = inject(CartService);
  book = input.required<BookCart>();
  bookChange = output<BookCart>();

  //emit event change quantity
  quantityChange(): void {
    this.bookChange.emit(this.book());
  }

  removeFromCart() {
    return this._cartService.removeFromCart(this.book());
  }
}
