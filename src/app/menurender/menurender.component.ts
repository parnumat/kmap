import { Component, OnInit, Input, OnChanges, HostListener, Output, EventEmitter, NgZone } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuService } from '../services/menu.service';
import { IMenu } from '../main/main.component';

@Component({
  selector: 'app-menurender',
  templateUrl: './menurender.component.html',
  styleUrls: ['./menurender.component.css']
})
export class MenurenderComponent implements OnInit {
  // informationState= history.state;
  informationState: any;
  // @Output() onGroupChanged = new EventEmitter<string>();

  scrolling: boolean;

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: false,
    mousewheel: true,
    scrollbar: false,
    navigation: false,
    pagination: true
  };

  menuSub: any;


  constructor(private auth: AuthService, private router: Router
    , private activatedRoute: ActivatedRoute
    , private menuService: MenuService
    , private route: ActivatedRoute
    , private zone:NgZone) {
    this.scrolling = false;
  }
  ngOnDestroy() {
    this.menuSub.unsubscribe();
  }
  ngOnInit(): void {
    this.informationState = this.menuService.currentMenu;
    this.menuSub = this.menuService.menu.subscribe(data => {
      this.zone.run(() => {
        this.informationState = data as IMenu[];
      });
    });
  }

  onMenuClicked(urlPath: string) {
    this.router.navigate(['/apprender', { path: urlPath }]);
  }

  // onScroll(event: Event) {
  //   if ((event.target as HTMLElement).scrollLeft > 0)
  //     this.onGroupChanged.emit("left");
  //   else
  //     this.onGroupChanged.emit("right");
  // }


  onSwipeRight(event, data) {
    console.log("event right", event);
    this.menuService.menuSwipe('right');

  }

  onSwipeLeft(event, data) {
    console.log("event left", event);
    this.menuService.menuSwipe('left');

  }
  onSwipeUp(event) {
    console.log("event up", event);

  }


}
