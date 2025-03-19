import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmationService } from '../../services/confirmation.service';
import { Router } from '@angular/router';

export class PersonalData {
  name: string = '';
  address: string = '';
  credit: string = '';

  constructor(name: string, address: string, credit: string) {
    this.name = name;
    this.address = address;
    this.credit = credit;
  }
}

@Component({
  selector: 'app-cart-form',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './cart-form.component.html',
  styleUrl: './cart-form.component.css',
})
export class CartFormComponent {
  personalData: PersonalData = new PersonalData('', '', '');
  private _confirmationService = inject(ConfirmationService);
  private router = inject(Router);

  send() {
    this._confirmationService.setData(this.personalData);
    this.router.navigate(['/confirmation']); //, { relativeTo: this.route }
  }
}
