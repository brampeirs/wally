import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public isAuthenticated = false;
  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.isAuthenticated = this.auth.isAuthenticated();
  }

  signIn() {
    this.auth.signInByGoogle();
  }
}
