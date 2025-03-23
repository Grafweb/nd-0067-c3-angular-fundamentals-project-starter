import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Book } from '../interfaces/book';
import { toSignal } from '@angular/core/rxjs-interop';

interface Quantity {
  quantity: number;
}

export type BookCart = Book & Quantity;

@Injectable({
  providedIn: 'root',
})
export class CartService {
  books = signal<BookCart[]>([]);
  totalPrice = signal<number>(0);

  setTotalPrice(price: number) {
    this.totalPrice.set(price);
  }

  addToCart(book: Book | BookCart, quantity: number) {
    this.books.update(function (books) {
      const exist_book = books.find((item) => item.id === book.id);
      if (exist_book) {
        return books.map(function (item) {
          if (item.id === book.id) {
            item.quantity = quantity;
            return item;
          } else {
            return item;
          }
        });
      } else {
        return [...books, { ...book, quantity }];
      }
    });
  }

  removeFromCart(book: BookCart) {
    this.books.update(function (books) {
      const bookIndex = books.findIndex((item) => item.id === book.id);
      if (bookIndex != -1) {
        books.splice(bookIndex, 1);
        return books;
      } else {
        return books;
      }
    });
  }

  cleanCart() {
    this.books.set([]);
  }
}
