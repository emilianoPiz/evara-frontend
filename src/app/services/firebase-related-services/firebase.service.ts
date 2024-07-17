import { Injectable, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  setDoc,
  updateDoc,
} from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private firestore = inject(Firestore);

  constructor() {}

  // Products Methods
  insertProduct(product: any) {
    const productId = product.id;
    const productDoc = doc(this.firestore, `products/${productId}`);
    return setDoc(productDoc, product);
  }

  deleteProduct(productId: string) {
    const productDoc = doc(this.firestore, `products/${productId}`);
    return deleteDoc(productDoc);
  }

  updateProduct(productId: string, product: any) {
    const productDoc = doc(this.firestore, `products/${productId}`);
    return updateDoc(productDoc, product);
  }

  // Users Methods
  insertUser(user: any) {
    const userId = user.id;
    const userDoc = doc(this.firestore, `users/${userId}`);
    return setDoc(userDoc, user);
  }

  deleteUser(userId: string) {
    const userDoc = doc(this.firestore, `users/${userId}`);
    return deleteDoc(userDoc);
  }

  updateUser(userId: string, user: any) {
    const userDoc = doc(this.firestore, `users/${userId}`);
    return updateDoc(userDoc, user);
  }
}
