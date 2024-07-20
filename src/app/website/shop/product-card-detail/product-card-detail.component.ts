import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../../../models/product.model';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NgIf,
    MatCardActions,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    MatCardSubtitle,
    MatCard,
  ],
  selector: 'app-product-card-detail',
  templateUrl: './product-card-detail.component.html',
  styleUrls: ['./product-card-detail.component.scss'],
})
export class ProductCardDetailComponent implements OnInit {
  product$!: Observable<Product>;
  @Input() product!: Product;

  constructor(private route: ActivatedRoute, private firestore: Firestore) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id')!;
    const productDoc = doc(this.firestore, `products/${productId}`);
    this.product$ = docData(productDoc, {
      idField: 'id',
    }) as Observable<Product>;
  }
}
