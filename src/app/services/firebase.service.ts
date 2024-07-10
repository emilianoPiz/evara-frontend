import { Injectable, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, addDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private firestore = inject(Firestore);
  constructor() { }

  insertData(data: any) {
    // get a reference to the user-profile collection
    const itemsCollection = collection(this.firestore, 'items');
    
    // get documents (data) from the collection using collectionData
    return addDoc(itemsCollection, data);;
  }
}
