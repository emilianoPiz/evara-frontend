import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsCollection = this.firestore.collection<Product>('products');

  constructor(private firestore: AngularFirestore) {}

  createProduct(product: Product): Promise<void> {
    const id = this.firestore.createId();
    return this.productsCollection.doc(id).set({ ...product, id });
  }

  getProduct(productId: string): Observable<Product | undefined> {
    return this.productsCollection.doc<Product>(productId).valueChanges();
  }

  updateProduct(productId: string, product: Partial<Product>): Promise<void> {
    return this.productsCollection.doc(productId).update(product);
  }

  deleteProduct(productId: string): Promise<void> {
    return this.productsCollection.doc(productId).delete();
  }
}
