import { Component, inject } from '@angular/core';
import { FirebaseService } from '../../services/firebase-related-services/firebase.service';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { ShopHomeComponent } from './shop-home/shop-home.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ShopHomeComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {
  data = { message: 'Hello, Firebase!' };
  constructor(private firebaseService: FirebaseService) {}

  private firestore = inject(Firestore);
  addProduct() {
    const newProduct = {
      id: 'PRODUCT-00002', 
      border_price: 3,
      buy_price: 40,
      category: "food",
      colorazioni: ["rosso", "giallo", "verde"],
      descrizione: "maglietta rossa, bella",
      tax: 10,
      fornitore: "adidas",
      magazzino: "bucarest",
      materiale: "cotone",
      origine: "india",
      prezzo: 69.99,
      promozione: "/promotions/promotionID",
      quantità: 100,
      stato: "disponibile",
      tag: "shirt",
      marca: "adidas",
      nome: "maglietta adidas",
    };

    this.firebaseService.insertProduct(newProduct)
      .then(() => {
        console.log('Product added successfully!');
      })
      .catch((error) => {
        console.error('Error adding product: ', error);
      });
  } 
  insertData() {
    
    const itemsCollection = collection(this.firestore, 'prodotti');
    addDoc(itemsCollection, this.data).then(() => {
      console.log('Data inserted successfully');
    }).catch(error => {
      console.error('Error inserting data', error);
    });
  }
}



