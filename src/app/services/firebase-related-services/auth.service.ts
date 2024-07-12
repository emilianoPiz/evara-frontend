import { Injectable, inject } from '@angular/core';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  User as FirebaseUser,
} from 'firebase/auth';
import { Firestore, collection, doc, setDoc } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../models/user.model';
import { Timestamp } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private firestore = inject(Firestore);
  private auth = getAuth();
  private userSubject = new BehaviorSubject<FirebaseUser | null>(null);
  user$ = this.userSubject.asObservable();

  constructor() {
    onAuthStateChanged(this.auth, (user) => {
      this.userSubject.next(user);
    });
  }

  async signUp(registerEmail: string, registerPassword: string, role: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        registerEmail,
        registerPassword
      );
      const user = userCredential.user;
      const userData: User = {
        id: user.uid,
        name: user.email || '',
        email: user.email || '',
        role: role,
        created_at: Timestamp.fromDate(new Date()),
        updated_at: Timestamp.fromDate(new Date()),
      };

      const usersCollection = collection(this.firestore, 'users');
      const userDoc = doc(usersCollection, user.uid);
      await setDoc(userDoc, userData);

      this.userSubject.next(user);
      return user;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async login(LoginEmail: string, LoginPassword: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        LoginEmail,
        LoginPassword
      );
      this.userSubject.next(userCredential.user);
      return userCredential.user;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async logout() {
    await this.auth.signOut();
    this.userSubject.next(null);
  }
}
