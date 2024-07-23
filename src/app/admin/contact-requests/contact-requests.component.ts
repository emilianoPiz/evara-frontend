// contact-requests.component.ts
import { Component, OnInit } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { NgFor, AsyncPipe } from '@angular/common';
import { ContactUs } from '../../models/contact-us.model';

@Component({
  selector: 'app-contact-requests',
  standalone: true,
  imports: [NgFor, AsyncPipe],
  templateUrl: './contact-requests.component.html',
  styleUrls: ['./contact-requests.component.scss'],
})
export class ContactRequestsComponent implements OnInit {
  contactRequests$: Observable<ContactUs[]>;

  constructor(private firestore: Firestore) {
    const contactsCollection = collection(this.firestore, 'contacts-requests');
    this.contactRequests$ = collectionData(contactsCollection, {
      idField: 'id',
    }) as Observable<ContactUs[]>;
  }

  ngOnInit(): void {}
}
