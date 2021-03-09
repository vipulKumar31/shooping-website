import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    // private http: HttpClient
  ) { }

  authenticateUser(username: string, password: string) {
    return 'Vipul Kumar';
    // return this.http.post<string>(
    //   `localhost:8080/login/auth`,{'username':username,'password':password}
    // );
  }

  setAuthenticatedUser(username) {
    sessionStorage.setItem('username', username);
  }
}
