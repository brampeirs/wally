
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  constructor(private router: Router) {}

  signInByGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
      localStorage.setItem('id_token', result.credential['idToken']);
      console.log('sign in by google, go to dashboard');
      this.router.navigate(['/dashboard']);
    }).catch(function(error) {
      console.error('signIn failed', error);
    });
  }

  getUser() {
    return firebase.auth().currentUser;
  }

  getUserId() {
    return firebase.auth().currentUser.uid;
  }

  isAuthenticated() {
    return this.getToken() != null;
  }

  signOut() {
    firebase.auth().signOut();
     localStorage.removeItem('id_token');
     console.log('signout goto landing');
      this.router.navigate(['landing']);
  }

  getToken() {
    return localStorage.getItem('id_token');
  }
}
