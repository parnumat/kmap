import { Component, Input } from '@angular/core';
import { ActivationEnd, ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class headerComponent {
  @Input() userDetail;
  // @Input() titleName;
  // @Input() positionName;
  // test;
  title: string;
  positionDetail: string;
  ngOnInit(){
    this.title = this.auth.getCurrentUser();
    this.positionDetail=this.auth.getPositionUser();
    // console.log(this.userDetail);
    // this.title = this.userDetail.user_name;
    // this.userPosition = this.userDetail.unit_desc;
    // console.log(this.titleName);
    // this.title = this.titleName;
    // this.userPosition=this.positionName;
    // this.test = localStorage.getItem('userDetail');
  }
  constructor(private router: Router, private auth: AuthService){

  }
  onClick(){
    this.clearData();
    this.router.navigate(['']);
  }
  clearData(){
    localStorage.removeItem('userDetail');
    localStorage.removeItem('positionDetail');
  }
logOut()
{
  this.auth.logOut();
}}

