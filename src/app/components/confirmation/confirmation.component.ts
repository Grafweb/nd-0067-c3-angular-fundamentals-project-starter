import { Component, inject } from '@angular/core';
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
export class ConfirmationComponent {
  private _confirmationService = inject(ConfirmationService);
  private _cartService = inject(CartService);

  get confirmationData() {
    return this._confirmationService.data;
  }

  get totalPrice() {
    return this._cartService.totalPrice;
  }
}
