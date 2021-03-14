import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LoginRouteGuardService {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let user = this.authenticationService.getAuthenticatedUser();
    if (user != null) {
      let fullName = JSON.parse(user).fullName;
      this.router.navigate(['homepage', fullName]);
      return false;
    }
    return true;
  }
}
