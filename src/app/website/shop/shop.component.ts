import { Component, inject } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {
  private firestore = inject(Firestore);
  data = { message: 'Hello, Firebase!' };
  insertData() {
    const itemsCollection = collection(this.firestore, 'items');
    addDoc(itemsCollection, this.data).then(() => {
      console.log('Data inserted successfully');
    }).catch(error => {
      console.error('Error inserting data', error);
    });
  }
}
