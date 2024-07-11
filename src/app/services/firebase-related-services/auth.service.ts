import { Injectable, inject } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private firestore = inject(Firestore);
  auth = getAuth();
  email: string = '';
  password: string = '';
  constructor() {}
  async signUp(RegisterEmail: string, RegisterPassword: string) {
    this.email = RegisterEmail;
    this.password = RegisterPassword;
    createUserWithEmailAndPassword(this.auth, this.email, this.password)
      .then((userCredential) => {
        const user = userCredential.user;
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
}
