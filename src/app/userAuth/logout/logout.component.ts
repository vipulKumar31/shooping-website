import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  userName = '';

  constructor(
    private authenticationService:AuthenticationService
  ) { }

  ngOnInit() {
    this.authenticationService.removeUser();
  }

}
