import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ShopHomeComponent } from './shop-home/shop-home.component';
import { FirebaseService } from '../../services/firebase-related-services/firebase.service';
@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ShopHomeComponent, RouterModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent {
  constructor(private firebaseService: FirebaseService) {}

  addProduct() {
    const NEW_PRODUCT = {
      id: 'PRODUCT-00002',
      border_price: 3,
      buy_price: 40,
      category: 'food',
      colorazioni: ['rosso', 'giallo', 'verde'],
      descrizione: 'maglietta rossa, bella',
      tax: 10,
      fornitore: 'adidas',
      magazzino: 'bucarest',
      materiale: 'cotone',
      origine: 'india',
      prezzo: 69.99,
      promozione: '/promotions/promotionID',
      quantità: 100,
      stato: 'disponibile',
      tag: 'shirt',
      marca: 'adidas',
      nome: 'maglietta adidas',
    };

    this.firebaseService
      .insertProduct(NEW_PRODUCT)
      .then(() => {
        console.log('Product added successfully!');
      })
      .catch((error) => {
        console.error('Error adding product: ', error);
      });
  }
}
