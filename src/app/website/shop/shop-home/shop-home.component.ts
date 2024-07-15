import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../templates/navbar/navbar.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../../../models/product.model';
import { CartService } from '../../../services/cart.service';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../shop-cart/shop-cart.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shop-home',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    ProductCardComponent,
    CartComponent,
    RouterModule,
  ],
  templateUrl: './shop-home.component.html',
  styleUrls: ['./shop-home.component.scss'],
})
export class ShopHomeComponent implements OnInit {
  private firestore = inject(Firestore);
  private cartService = inject(CartService);
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

  addToCart(product: Product) {
    const productId = product.id;
    this.cartService.addToCart({
      product_id: productId,
      product_name: product.name,
      quantity: 1,
      price: product.price,
      total: product.price,
    });
  }
}
