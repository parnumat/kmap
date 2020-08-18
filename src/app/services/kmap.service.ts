import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ExtensionsService } from './utils/extensions.service';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KmapService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient,private extensionsService:ExtensionsService) {}
  

  getMenuItem(userData:string,typeData:string){
    // debugger;
    //console.log('asd')
    // let model = { user_id:data,
    //               password: '0',
    //               org:'OPP'};
    
    let model = {
      fn:"getMockMenu",
      group_id: typeData,
      user_id:userData
    };
    
    // return this.http.post('http://192.168.55.53:1188/api/test/',model);
    //return this.http.post('https://localhost:5001/api/test',model);
    return this.http.post(`${this.baseUrl}menu`,model);
  }


  // getTest(){
  //   let result;
  //   const http = this.http.get('http://192.168.55.53:1188/api/test',{observe:"response"});

  //   return http.toPromise();
  // }
  
}
