import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase';
import { User } from './user.model';

@Injectable()
export class AuthService {

    constructor(private router: Router,
                private zone: NgZone) {
    }

    signInByGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result) => {
            firebase.auth().currentUser.getIdToken( true).then((idToken) => {
                localStorage.setItem('id_token', idToken);
                //localStorage.setItem('id_token', result.credential['accessToken']);

                localStorage.setItem('user_uid', result.user.uid);
                localStorage.setItem('user_display_name', result.user.displayName);
                localStorage.setItem('user_email', result.user.email);
                localStorage.setItem('user_phoneNumber', result.user.phoneNumber);
                localStorage.setItem('user_photoURL', result.user.photoURL);

                console.log('sign in by google, go to dashboard');
                this.zone.run(() => { this.router.navigate(['/dashboard']); });

            });

        }).catch(function (error) {
            console.error('signIn failed', error);
        });
    }

    getUser() {
        const user: User = {
            uid: localStorage.getItem('user_uid'),
            displayName: localStorage.getItem('user_display_name'),
            email: localStorage.getItem('user_email'),
            phoneNumber: localStorage.getItem('user_phoneNumber'),
            photoURL: localStorage.getItem('user_photoURL')
        };
        return user;
    }

    getUserId() {
        return localStorage.getItem('user_uid');
    }

    isAuthenticated() {
        return this.getToken() != null;
    }

    signOut() {
        firebase.auth().signOut();
        localStorage.removeItem('id_token');

        localStorage.removeItem('user_uid');
        localStorage.removeItem('user_display_name');
        localStorage.removeItem('user_email');
        localStorage.removeItem('user_phoneNumber');
        localStorage.removeItem('user_photoURL');
        console.log('signout goto landing');
        this.router.navigate(['landing']);
    }

    getToken() {
        return localStorage.getItem('id_token');
    }
}
