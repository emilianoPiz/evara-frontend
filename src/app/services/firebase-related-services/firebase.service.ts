import { Injectable, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { doc, setDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private firestore = inject(Firestore);

  constructor() {}

  insertProduct(product: any) {
    const productId = product.id;
    const productDoc = doc(this.firestore, `products/${productId}`);
    return setDoc(productDoc, product);
  }
}
