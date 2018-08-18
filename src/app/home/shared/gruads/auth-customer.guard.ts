import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthCustomerService } from './auth-customer.service';

@Injectable()
export class AuthCustomerGuard implements CanActivate {
  constructor(private auth: AuthCustomerService, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // !this.auth.authInfo$.getValue().IsLogin() && 
    if (!localStorage.getItem('currentUser') ){
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
