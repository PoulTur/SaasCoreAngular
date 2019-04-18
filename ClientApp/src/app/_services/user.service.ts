import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/user';

@Injectable({ providedIn: 'root' })
export class UserService {

  baseUrl: string = "https://localhost:44310/";



  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(this.baseUrl + "users");
  }

  getById(id: number) {
    return this.http.get<User>(this.baseUrl + "users/" + id.toString());
  }
}
