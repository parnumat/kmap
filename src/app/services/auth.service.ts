import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl + 'users/login';
  //baseUrl = 'http://localhost:5000/users/login';
  // baseUrl = 'http://portal.kimpai.com/portal/service/login.ashx';
  jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient, private router: Router,
    private toastrService: ToastrService) { }

  login(model: any) {
    const payload2 = new HttpParams()
      .set('user', model.userId)
      .set('pwd', model.pass);

    const payload = {
      username : model.userId,
      password: model.pass
    }
    console.log('a',this.baseUrl);

     return this.http.post(this.baseUrl, payload).pipe(map(response => {
       const user = response;

       if (response && response['token']) {
            localStorage.setItem('userId', response['userID']); //เก็บข้อมูลใน localstorage
            localStorage.setItem('userName', response['userName']);
            localStorage.setItem('email', response['email']);
            localStorage.setItem('nickname', response['nickname']);
            localStorage.setItem('orgId', response['org']);
            localStorage.setItem('posRole', response['posrole']);
            localStorage.setItem('token', response['token']);
            this.toastrService.success('เข้าสู่ระบบเรียบร้อย');
            this.router.navigate(['/layout']);
          }
     }));
  }

 getCurrentUser() {
   return localStorage.getItem('userName'); //ดึงข้อมูลออกมา

 }
 getPositionUserId(){
  return localStorage.getItem('userId');
 }
 getPositionUser(){
  return localStorage.getItem('userId');
 }
getToken(){
  return localStorage.getItem('token');
}

  loggedIn() {
    const token = localStorage.getItem('token');

    if (!token) {
      return false;
    }

    if (this.jwtHelper.isTokenExpired(token)) {
      this.logOut();
      return false;
    }
    return true;
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('org');
    localStorage.removeItem('mattypeList');
    localStorage.removeItem('custList');
    this.router.navigate(['/login']);
  }




}
