import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

import { DOCUMENT } from '@angular/common';

// Inject the authentication service into your component through the constructor
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'serverless-angular-workshop';
  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  loginWithRedirect(): void {
    // Call this to redirect the user to the login page
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout({
      returnTo: this.doc.location.origin,
    });
  }
}
