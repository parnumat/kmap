import { Component } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class layoutComponent {
  title = '';
  userPosition = '';
  userDetail:any;
  positionDetail:any;
  // test;
constructor(){

}
ngOnInit(){
  this.userDetail = JSON.parse(localStorage.getItem('userDetail'));
  // this.positionDetail = JSON.parse(localStorage.getItem('positionDetail'));

console.log('2');
}

// test(test:EventEmitter){
// console.log('test',test);
// }
// }
}
