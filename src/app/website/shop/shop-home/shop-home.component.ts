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
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
} from '@angular/material/sidenav';
import { MatNavList } from '@angular/material/list';
import { EvaraSpinnerComponent } from '../../../templates/evara-spinner/evara-spinner.component';
import { SearchBarComponent } from '../../../templates/search-bar/search-bar.component';

@Component({
  selector: 'app-shop-home',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavContainer,
    MatSidenavContent,
    MatSidenav,
    MatNavList,
    NavbarComponent,
    ProductCardComponent,
    CartComponent,
    RouterModule,
    EvaraSpinnerComponent,
    SearchBarComponent,
  ],
  templateUrl: './shop-home.component.html',
  styleUrls: ['./shop-home.component.scss'],
})
export class ShopHomeComponent implements OnInit {
  private firestore = inject(Firestore);
  private cartService = inject(CartService);
  data: Product[] = [];
  isLoading = true;
  searchTerm: string = '';
  filteredProducts: Product[] = [];
  displayedProducts: Product[] = [];
  currentIndex: number = 0;
  pageSize: number = 10;

  trackById(index: number, item: any): number {
    return item.id;
  }

  ngOnInit() {
    this.getAllProducts().subscribe((products) => {
      this.data = products;
      this.filterProducts();
      setTimeout(() => {
        this.isLoading = false;
      }, 1500);
    });
    console.log('initialize shop-home');
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

  filterProducts() {
    this.filteredProducts = this.data.filter(
      (element) =>
        element.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        element.category.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.resetDisplayedProducts();
  }

  loadMoreProducts() {
    const nextIndex = this.currentIndex + this.pageSize;
    const nextProducts = this.filteredProducts.slice(
      this.currentIndex,
      nextIndex
    );
    this.displayedProducts = this.displayedProducts.concat(nextProducts);
    this.currentIndex = nextIndex;
  }

  onSearch(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.filterProducts();
  }

  resetDisplayedProducts() {
    this.displayedProducts = [];
    this.currentIndex = 0;
    this.loadMoreProducts();
  }
}
