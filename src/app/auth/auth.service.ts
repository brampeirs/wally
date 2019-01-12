
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  constructor(private router: Router) {

  }
  private token = null;
  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
        console.log('registration failed', error);
    });
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then((res) => {
      firebase.auth().currentUser.getIdToken().then((token) => {
        this.token = token;
        this.router.navigate(['/']);
        console.log('token', this.token);
      });
      console.log('successfully logged in', res);
    }).catch((error) => {
      console.log('signin failed', error);
      }
    );
  }

  googleSignin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      this.token = result.credential;
      console.log('token', this.token['idToken']);
      // The signed-in user info.
      const user = result.user;
      console.log('user', user);

      this.router.navigate(['/']);
    }).catch(function(error) {
      console.log('signin failed', error);
    });
  }


  getToken() {
    console.log('token', this.token);
    return this.token;
  }

  isAuthenticated() {
    firebase.auth().currentUser.getIdToken().then((token) => {
      this.token = token;
    });
    console.log('is authenticated', this.token);

    return this.token !== null;
  }

  signOut() {
    firebase.auth().signOut().then((res) => {
      this.token = null;
      this.router.navigate(['welcome']);

    });
  }
}
