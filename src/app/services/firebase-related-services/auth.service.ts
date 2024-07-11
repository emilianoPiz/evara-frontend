import { Injectable, inject } from '@angular/core';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import { Firestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private firestore = inject(Firestore);
  private auth = getAuth();
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor() {
    onAuthStateChanged(this.auth, (user) => {
      this.userSubject.next(user);
    });
  }

  async signUp(registerEmail: string, registerPassword: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        registerEmail,
        registerPassword
      );
      this.userSubject.next(userCredential.user);
      return userCredential.user;
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
