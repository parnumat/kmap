import { Component, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class footerComponent {
  // @Output() eventOut = new EventEmitter();
  title = '';
ngOnInit(){
}

// onMessageClick(click: EventEmitter){
//   var test = 'testt';
//   this.eventOut.emit(test);
// }
}
