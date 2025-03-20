import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../interfaces/book';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ProductItemComponent,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  //inject service
  private readonly _productService = inject(ProductService);
  myBooks$: Observable<Book[]> = this._productService.myBooks$;

  constructor() {}

  ngOnInit() {
    //get all books
    this._productService.getProducts();
  }
}
