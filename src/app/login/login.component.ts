import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpXsrfTokenExtractor } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

import { map, catchError } from 'rxjs/operators';
import { ActivationEnd, ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent {
  value='';
  title = '';
  userPosition = '';
  model:loginForm={};
  userId:string;
  password:string;
  baseUrl=environment.apiUrl;
  userDetail:any;
  positionDetail: any;
  response = {
    "token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI2MDAwNDIiLCJ1bmlxdWVfbmFtZSI6WyLguKXguLLguKDguKfguLHguJUg4LiV4Lix4LmJ4LiH4Lib4Li04Lii4Liw4LiB4Li44LilIiwiQjAwIiwiT1BQIl0sIm5iZiI6MTU5NDI4MDMzMywiZXhwIjoxNTk0MzY2NzMzLCJpYXQiOjE1OTQyODAzMzN9.1YCabqUZPMjofh0QtQC3ndvjB_bZ2-WxzwxHSiNxLsk-PZT_0uxC7Scu_1_fJxTIqPUqcvXXREkiir9DqWBLeA",
    "user": {
        "user_id": "600042",
        "user_name": "ลาภวัต ตั้งปิยะกุล",
        "unit_id": "B00",
        "unit_desc": "สารสนเทศ IT",
        "del_stat": "N"
    }
};

responseAdmin = {
    "token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI2MDAwNDIiLCJ1bmlxdWVfbmFtZSI6WyLguKXguLLguKDguKfguLHguJUg4LiV4Lix4LmJ4LiH4Lib4Li04Lii4Liw4LiB4Li44LilIiwiQjAwIiwiT1BQIl0sIm5iZiI6MTU5NDI4MDMzMywiZXhwIjoxNTk0MzY2NzMzLCJpYXQiOjE1OTQyODAzMzN9.1YCabqUZPMjofh0QtQC3ndvjB_bZ2-WxzwxHSiNxLsk-PZT_0uxC7Scu_1_fJxTIqPUqcvXXREkiir9DqWBLeA",
    "user": {
        "user_id": "admin",
        "user_name": "admin",
        "unit_id": "A00",
        "unit_desc": "Admin",
        "del_stat": "N"
    }
};

constructor(
  private router: Router,
  private authService: AuthService,
  private toastrService: ToastrService){}
  
  onClick(){

    console.log('1');
    if(this.model.userId==='admin'){
      this.userDetail = this.responseAdmin.user;
      // this.positionDetail=this.responseAdmin.user;
    } else {
      this.userDetail = this.response.user;
      // this.positionDetail=this.response.user;
    }
    this.positionDetail=this.response.user;
    localStorage.setItem('userDetail',JSON.stringify(this.userDetail));
    // localStorage.setItem('positionDetail',JSON.stringify(this.positionDetail));
    this.router.navigate(['/layout']);
    // return this.http.post(this.baseUrl + 'auth/login', this.model).pipe(
    //   map((response: any) => {
    //     // console.log(response);
    //     response.body = {
    //       "token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI2MDAwNDIiLCJ1bmlxdWVfbmFtZSI6WyLguKXguLLguKDguKfguLHguJUg4LiV4Lix4LmJ4LiH4Lib4Li04Lii4Liw4LiB4Li44LilIiwiQjAwIiwiT1BQIl0sIm5iZiI6MTU5NDI4MDMzMywiZXhwIjoxNTk0MzY2NzMzLCJpYXQiOjE1OTQyODAzMzN9.1YCabqUZPMjofh0QtQC3ndvjB_bZ2-WxzwxHSiNxLsk-PZT_0uxC7Scu_1_fJxTIqPUqcvXXREkiir9DqWBLeA",
    //       "user": {
    //           "user_id": "600042",
    //           "user_name": "ลาภวัต ตั้งปิยะกุล",
    //           "unit_id": "B00",
    //           "unit_desc": "สารสนเทศ IT",
    //           "del_stat": "N"
    //       }
    //   }
    //   console.logRes
    //     // const user = response;
    //     // if (user) {
    //     //   console.log(user);
    //     //   localStorage.setItem('id',user.user.user_id);
    //     // }
    //   })
    // );


    }

  keyEnter(event:KeyboardEvent) {
   
    if( event.keyCode == 13 || event.which == 13) {
      this.login();
    }
    
  }

  loading: Boolean = false;
 
  login() {
    
    this.loading = true;
    this.authService.login(this.model).subscribe(res=>{
      console.log(res);
      // this.toastrService.success('เข้าสู่ระบบเรียบร้อย');
    },(err)=> {
      this.toastrService.error('เข้าสู่ระบบไม่ถูกต้อง');
  },()=>{
    
      this.router.navigate(['/layout']);
    });

    // this.loading = true;
    
    // this.authService.login(this.model).subscribe(next => {
    //   this.toastrService.success('เข้าสู่ระบบเรียบร้อย');
    // }, error => {
    //   this.toastrService.error('ข้อมูลเข้าสู่ระบบไม่ถูกต้อง');

    //   this.loading = false;
    // }, () => {
    //   this.router.navigate(['/layout']);
    //   this.loading = false;
    // });
  
  }
  
}
 interface loginForm{
  userId?:string;
  pass?:string;
}
