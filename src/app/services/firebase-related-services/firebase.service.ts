import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import { Observable, from, map } from 'rxjs';

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

  // Generic method to get documents by query
  getDocumentsByQuery(
    collectionPath: string,
    field: string,
    value: any
  ): Observable<any[]> {
    const collectionRef = collection(this.firestore, collectionPath);
    const q = query(collectionRef, where(field, '==', value));
    return from(getDocs(q)).pipe(
      map((querySnapshot) => {
        const documents: any[] = [];
        querySnapshot.forEach((doc) => {
          documents.push({ id: doc.id, ...doc.data() });
        });
        return documents;
      })
    );
  }

  // Method to get all promotions
  getAllPromotions(): Observable<any[]> {
    const collectionRef = collection(this.firestore, 'promotions');
    return collectionData(collectionRef, { idField: 'id' });
  }
}
