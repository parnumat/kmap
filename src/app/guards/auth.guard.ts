import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { AlertifyService } from '../services/AlertifyService';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router:Router, private alertify:AlertifyService, private toastrService:ToastrService){}
  
  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    }

    this.toastrService.error('กรุณา Login ก่อนใช้งานระบบ');
    this.router.navigate(['/login']);
    return false;
  }
  
}
