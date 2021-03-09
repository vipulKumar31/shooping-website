import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  errorMessage = '';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  authenticateUser() {
    // let fullName = this.authenticationService.authenticateUser(this.username, this.password)
    // if (fullName != null) {
    //   this.authenticationService.setAuthenticatedUser(this.username);
    //   this.router.navigate(['homepage', fullName]);
    // } else {
    //   this.errorMessage = 'Invalid Credentials!';
    // }
  }

}
