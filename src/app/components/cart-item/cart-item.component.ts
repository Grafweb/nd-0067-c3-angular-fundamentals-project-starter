import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  input,
  Output,
  output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BookCart, CartService } from '../../services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  //inject service
  private _cartService = inject(CartService);
  private _snackBar = inject(MatSnackBar);
  @Input({ required: true }) book: BookCart = {} as BookCart;
  @Output() bookChange = new EventEmitter<BookCart>();
  readonly message: string = 'Removed from cart!';
  //emit event change quantity
  quantityChange(): void {
    this.bookChange.emit(this.book);
  }

  //remove everything form Cart
  removeFromCart() {
    this._snackBar.open(this.message, undefined, { duration: 2000 });
    return this._cartService.removeFromCart(this.book);
  }
}
