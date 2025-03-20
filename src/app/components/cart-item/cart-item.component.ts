import { Component, inject, input, output } from '@angular/core';
import { BookCart, CartService } from '../../services/cart.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-cart-item',
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
  ],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  //get book with qantity
  book = input.required<BookCart>();
  bookChange = output<BookCart>();

  //emit event change quantity
  quantityChange(): void {
    this.bookChange.emit(this.book());
  }
}
