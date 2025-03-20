import { Component, inject, Input } from '@angular/core';
import { Book } from '../../interfaces/book';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-item',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    RouterModule,
  ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input() book: Book = {} as Book;
  readonly quantityRange: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  readonly message: string = 'Added to cart!';
  quantity: number = 1;
  //inject service
  private _snackBar = inject(MatSnackBar);
  private _cartService = inject(CartService);

  //add to cart
  addToCart(book: Book, quantity: number) {
    this._snackBar.open(this.message, undefined, { duration: 2000 });
    this._cartService.addToCart(book, quantity);
  }
}
