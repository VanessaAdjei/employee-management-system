import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  login(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, password)
        .then((userCredential: any) => {
          
          resolve(userCredential);
        })
        .catch((error: any) => {
          
          reject(error);
        });
    });
  }

  logout(): Promise<void> {
    return this.afAuth.signOut();
  }
}