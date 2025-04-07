import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthServiceService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    // Retrieve authentication status from AuthService
    const isLoggedIn = this.authService.isAuthenticated();

    let returnBoolean = false;

    if (isLoggedIn) {
      // Allow access if the user is authenticated
      returnBoolean = true;
    } else {
      // Redirect unauthenticated users to the home page
      this.router.navigate(['/']);
    }

    return returnBoolean;
  }
}
