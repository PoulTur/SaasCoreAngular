import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services/authentication.service';
import { Role } from './_models/role';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(private router: Router, private authenticationService: AuthenticationService){}


  get userAuthenticated() {
    return this.authenticationService.getCurrentUser();
  }


  get isAdmin() {
    var currentUser = this.authenticationService.getCurrentUser();
    return currentUser.role === Role.Admin;
   
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
