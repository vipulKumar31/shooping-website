import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  fullName='';

  constructor(
    public authenticationService:AuthenticationService
  ) { }

  ngOnInit() {
    let user = JSON.parse(this.authenticationService.getAuthenticatedUser());
    this.fullName = user.fullName;
  }

}
