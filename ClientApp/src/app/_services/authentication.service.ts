import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  baseUrl: string = "https://localhost:44310/users/";

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    return this.http.post<any>(this.baseUrl + "authenticate", { username, password })
      .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      }));
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser"));
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
