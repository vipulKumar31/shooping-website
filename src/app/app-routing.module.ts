import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginRouteGuardService } from './service/routeGuard/login-route-guard.service';
import { RouteGuardService } from './service/routeGuard/route-guard.service';
import { LoginComponent } from './userAuth/login/login.component';
import { LogoutComponent } from './userAuth/logout/logout.component';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [LoginRouteGuardService] },
  { path: 'login', component: LoginComponent, canActivate: [LoginRouteGuardService] },
  { path: 'homepage/:fullName', component: HomepageComponent, canActivate: [RouteGuardService] },
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService] },

  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
