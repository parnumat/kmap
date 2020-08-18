import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menurender',
  templateUrl: './menurender.component.html',
  styleUrls: ['./menurender.component.css']
})
export class MenurenderComponent implements OnChanges  {
  @Input() slides: string[];
  @Input() menuAdmin: any;

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: false,
    mousewheel: true,
    scrollbar: false,
    navigation: false,
    pagination: true
  };

  constructor(private auth : AuthService, private router: Router) { }
  
  ngOnChanges() {
    // create header using child_id
    console.log('slide changed', this.slides);
  }

  onMenuClicked(urlPath: string) {
    this.router.navigate(['/apprender', { path: urlPath }]);
    // const path = urlPath + "?token=" + this.auth.getToken();
    // window.open(path, "_blank");
  }

}
