// src/app/services/user.service.ts

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersCollection = this.firestore.collection<User>('users');

  constructor(private firestore: AngularFirestore) {}

  createUser(user: User): Promise<void> {
    const id = this.firestore.createId();
    return this.usersCollection.doc(id).set({ ...user, id });
  }

  getUser(userId: string): Observable<User | undefined> {
    return this.usersCollection.doc<User>(userId).valueChanges();
  }

  updateUser(userId: string, user: Partial<User>): Promise<void> {
    return this.usersCollection.doc(userId).update(user);
  }

  deleteUser(userId: string): Promise<void> {
    return this.usersCollection.doc(userId).delete();
  }
}
