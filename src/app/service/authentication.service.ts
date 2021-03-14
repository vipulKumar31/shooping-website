import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  authenticateUser(userName: string, password: string) {
    // return null;
    return 'Vipul Kumar';
    // return this.http.post<string>(
    //   `localhost:8080/login/auth`,{'userName':userName,'password':password}
    // );
  }

  setAuthenticatedUser(userName, fullName) {
    let user = { 'userName': userName, 'fullName': fullName };
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  getAuthenticatedUser() {
    let user = sessionStorage.getItem('user');
    if (user != null)
      return user;
    else
      return null;
  }

  removeUser() {
    sessionStorage.removeItem('user');
  }
}
