import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../templates/navbar/navbar.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../../../models/product.model';
@Component({
  selector: 'app-shop-home',
  standalone: true,
  imports: [NavbarComponent, ProductCardComponent],
  templateUrl: './shop-home.component.html',
  styleUrl: './shop-home.component.scss',
})
export class ShopHomeComponent {
  private firestore = inject(Firestore);

  data: Product[] = [];

  ngOnInit() {
    this.getAllProducts().subscribe((products) => {
      this.data = products;
    });
  }
  getAllProducts(): Observable<Product[]> {
    const productsCollection = collection(this.firestore, 'products');
    return collectionData(productsCollection, { idField: 'id' }) as Observable<
      Product[]
    >;
  }
}
