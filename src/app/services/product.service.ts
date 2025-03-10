import { HttpClient } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  filter,
  find,
  map,
  Observable,
  of,
  share,
  shareReplay,
  tap,
  throwError,
} from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private myBooksList: Book[] = [];
  // this is myBag where all selected product flow
  private myBooks = new BehaviorSubject<Book[]>([]);

  myBooks$ = this.myBooks.asObservable();

  constructor(private http: HttpClient) {}

  getProducts(): void {
    this.http
      .get<Book[]>('/assets/data.json')
      .subscribe((books) => this.myBooks.next(books));
  }
}
