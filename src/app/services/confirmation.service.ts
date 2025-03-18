import { Injectable, signal } from '@angular/core';
import { PersonalData } from '../components/cart-form/cart-form.component';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationService {
  persolanlData = signal<PersonalData>({} as PersonalData);

  get data() {
    return this.persolanlData();
  }

  setData(personalData: PersonalData) {
    this.persolanlData.set(personalData);
  }
}
