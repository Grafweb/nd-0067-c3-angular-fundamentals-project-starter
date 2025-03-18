import { CommonModule } from '@angular/common';
import { Component, effect, inject, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { BookCart, CartService } from '../../services/cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartFormComponent } from '../cart-form/cart-form.component';

@Component({
  selector: 'app-cart',
  imports: [
    CommonModule,
    MatGridListModule,
    CartItemComponent,
    CartFormComponent,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  private _cartService = inject(CartService);
  books = this._cartService.books;
  // price: number = this.books().reduce((p, c) => p + c.price * c.quantity, 0);

  constructor() {
    // Register a new effect.
    effect(() => {
      this.price;
    });
  }

  ngOnInit(): void {
    this._cartService.setTotalPrice(this.price);
  }

  get price(): number {
    return this.books().reduce((p, c) => p + c.price * c.quantity, 0);
  }

  quantityChange(book: BookCart): void {
    this._cartService.setTotalPrice(this.price);
    this._cartService.addToCart(book, book.quantity);
  }
}
