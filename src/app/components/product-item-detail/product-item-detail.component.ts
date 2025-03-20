import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../../services/product.service';
import { Book } from '../../interfaces/book';
import { find, map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-item-detail',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
  templateUrl: './product-item-detail.component.html',
  styleUrl: './product-item-detail.component.css',
})
export class ProductItemDetailComponent {
  private readonly routeActive = inject(ActivatedRoute);
  private readonly router = inject(Router);
  //inject service
  private readonly _productService = inject(ProductService);
  private _cartService = inject(CartService);
  bookId: number = 1;
  book: Book = {} as Book;
  readonly quantityRange: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  readonly message: string = 'Added to cart!';
  quantity: number = 1;
  private _snackBar = inject(MatSnackBar);

  //this method gets one book
  getBook(): Observable<Book | undefined> {
    return this._productService.myBooks$.pipe(
      map((books) => books.find((book) => book.id === this.bookId))
    );
  }
  //this method add to cart
  addToCart(book: Book, quantity: number): void {
    this._snackBar.open(this.message, undefined, { duration: 2000 });
    this._cartService.addToCart(book, quantity);
  }

  ngOnInit() {
    //get id book
    const id: string | null = this.routeActive.snapshot.paramMap.get('id');
    if (id === null) {
      this.router.navigate(['product-list']);
    } else {
      this.bookId = parseInt(id);
    }
    //get all books
    this._productService.getProducts();
  }
}
