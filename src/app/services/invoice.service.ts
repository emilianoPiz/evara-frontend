// src/app/services/invoice.service.ts

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Invoice } from '../models/invoice.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private invoicesCollection = this.firestore.collection<Invoice>('invoices');

  constructor(private firestore: AngularFirestore) {}

  createInvoice(invoice: Invoice): Promise<void> {
    const id = this.firestore.createId();
    return this.invoicesCollection.doc(id).set({ ...invoice, id });
  }

  getInvoice(invoiceId: string): Observable<Invoice | undefined> {
    return this.invoicesCollection.doc<Invoice>(invoiceId).valueChanges();
  }

  updateInvoice(invoiceId: string, invoice: Partial<Invoice>): Promise<void> {
    return this.invoicesCollection.doc(invoiceId).update(invoice);
  }

  deleteInvoice(invoiceId: string): Promise<void> {
    return this.invoicesCollection.doc(invoiceId).delete();
  }
}
