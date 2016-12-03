import { Injectable }      from '@angular/core';
import { Router }          from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
import { myConfig }        from './auth.config';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {

  // Configure Auth0
  lock = new Auth0Lock(myConfig.clientID, myConfig.domain, {});

  constructor(private router: Router) {
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
      this.router.navigate(['/ingredient']);
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // It searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    this.router.navigate(['/']);
  };
}


