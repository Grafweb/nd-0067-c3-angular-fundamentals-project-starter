import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ConfirmationService } from '../../services/confirmation.service';
import { MatCardModule } from '@angular/material/card';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-confirmation',
  imports: [MatCardModule, RouterLink, MatButtonModule],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css',
})
export class ConfirmationComponent implements OnDestroy {
  private _confirmationService = inject(ConfirmationService);
  private _cartService = inject(CartService);

  //get cofirmation data like order
  get confirmationData() {
    return this._confirmationService.data;
  }
  //get total price
  get totalPrice() {
    return this._cartService.totalPrice;
  }

  ngOnDestroy(): void {
    //clean cart
    this._cartService.cleanCart();
  }
}
