import { Component } from '@angular/core';
import { EventEmitter } from 'events';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class layoutComponent {
  title = '';
  userPosition = '';
  userDetail: any;
  positionDetail: any;
  // test;
  constructor(
    // private menuService: MenuService
  ) {

  }
  ngOnInit() {
    this.userDetail = JSON.parse(localStorage.getItem('userDetail'));
    // this.menuService.changeGroup('');
    // this.positionDetail = JSON.parse(localStorage.getItem('positionDetail'));
  }

  // test(test:EventEmitter){
  // }
  // }
}
