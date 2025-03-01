import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../interfaces/book';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  myBooks$: Observable<Book[]>;

  constructor(private productService: ProductService) {
    this.myBooks$ = this.productService.getProducts();
  }
}
