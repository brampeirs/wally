import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    firebase.initializeApp(
      {
          apiKey: "AIzaSyBH3hVYWIKjfRH1ZOh__96sMbDRJ8dKweU",
          authDomain: "recipes-fcf10.firebaseapp.com",
          databaseURL: "https://recipes-fcf10.firebaseio.com",
          projectId: "recipes-fcf10",
          storageBucket: "recipes-fcf10.appspot.com",
          messagingSenderId: "401474415664"
      });
  }
}
