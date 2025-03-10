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
  constructor() {}

  addToCart(book: Book, quantity: number) {
    this.books.update((books) => [...books, { ...book, quantity }]);
  }
}
