import { Injectable, inject } from '@angular/core';
import {
  User,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  Firestore,
  collection,
  doc,
  getDoc,
  setDoc,
  Timestamp,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { BehaviorSubject } from 'rxjs';
import { ENVIRONMENT } from '../../../environments/environment';

// Initialize Firebase
const app = initializeApp(ENVIRONMENT.firebaseConfig);

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private firestore = getFirestore(app);
  private auth = getAuth(app);
  private userSubject = new BehaviorSubject<User | null>(null);
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
      const userData = {
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
      return userCredential;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async logout() {
    await this.auth.signOut();
    this.userSubject.next(null);
  }

  async getUserData(uid: string): Promise<User | undefined> {
    const userDoc = doc(this.firestore, `users/${uid}`);
    const userSnapshot = await getDoc(userDoc);
    return userSnapshot.exists() ? (userSnapshot.data() as User) : undefined;
  }

  isLoggedIn(): boolean {
    return this.userSubject.value !== null;
  }
}
