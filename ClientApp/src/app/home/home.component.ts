import { Component } from '@angular/core';

import { User } from '../_models/user';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  currentUser: User;

  constructor(private authenticationService: AuthenticationService) {
    this.currentUser = authenticationService.getCurrentUser();
  }


  ngOnInit() {

  }
}
