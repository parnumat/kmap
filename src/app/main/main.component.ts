import {
  Component,
  ViewChild,
  ElementRef,
  TemplateRef,
  ViewContainerRef,
  Renderer2,
} from '@angular/core';
import { KmapService } from '../services/kmap.service';
import { Observable, Subject, fromEvent } from 'rxjs';
import {
  map,
  filter,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs/operators';
import {
  SwiperComponent,
  SwiperDirective,
  SwiperConfigInterface,
  SwiperScrollbarInterface,
  SwiperPaginationInterface,
} from 'ngx-swiper-wrapper';
import { type } from 'os';
import Swiper from 'swiper';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { slideInAnimation } from '../services/animations';
import { RouterOutlet, Router } from '@angular/router';
import { MenuService } from '../services/menu.service';

declare var $: any;

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [slideInAnimation],
})
export class mainComponent {
  title = '';
  checkBtn = 'ALL';
  // searchText = '';
  searchText = new Subject<string>();
  groupList = ['ALL', '1', '2', '3'];
  groupPos = 0;
  group_id = 'ALL';
  user_id = '';
  userDetail: any;
  fiterText = '';

  menuObject: IMenu[];
  menuAdmin: IMenu[];
  //menuEmp: EmpMenu[];

  swiper: any;

  // @ViewChild("outlet", { read: ViewContainerRef }) outletRef: ViewContainerRef;
  // @ViewChild("content", {read: TemplateRef}) contentRef: TemplateRef<any>;

  @ViewChild('searchMenu', { static: true }) searchMenuInput: ElementRef;

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: false,
    mousewheel: true,
    scrollbar: false,
    navigation: false,
    pagination: true,
  };

  public slides = [];

  subjectSub: any;
  constructor(
    private kmapService: KmapService,
    private router: Router,
    private menuService: MenuService,
    private renderer: Renderer2
  ) { }

  ngOnDestroy(): void {
    this.subjectSub.unsubscribe();
  }

  ngOnInit() {
    this.subjectSub = this.menuService.subject.subscribe((data) => {
      this.checkBtn = data;
      console.log(this.checkBtn);
      this.searchMenuInput.nativeElement.value = '';
      let scrollSlice = 0;
      if (data !== 'ALL' && data !== '1') {
        scrollSlice = parseInt(this.checkBtn) * 80;
      }
      $('.everyButton').scrollLeft(scrollSlice);
    });
    const dataAll = this.menuAdmin;

    this.getMenu('ALL');
    this.userDetail = JSON.parse(localStorage.getItem('userDetail'));
    fromEvent(this.searchMenuInput.nativeElement, 'keyup')
      .pipe(
        map((event: any) => {
          return event.target.value;
        }),

        // Time in milliseconds between key events
        debounceTime(400),
        // If previous query is diffent from current
        distinctUntilChanged()
        // subscription for response
      )
      .subscribe((text: string) => {
        this.fiterText = text;
        this.onSearchChanged(text);
      });

  }
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }

  getMenuInfo(group_id: string) {
    this.groupPos = this.groupList.findIndex((r) => r == group_id);
    this.group_id = group_id;
    // this.checkBtn = group_id;
    this.user_id = window.localStorage.getItem('userId');
    this.kmapService.getMenuItem(this.user_id, group_id).subscribe((result) => {
      this.menuObject = [...(result as IMenu[])];
      this.onSearchChanged(this.fiterText);
      this.router.navigateByUrl(`/layout/${this.group_id}`, {
        state: { slides: this.slides, menuAdmin: this.menuAdmin },
      });
    });
  }

  onSearchChanged(searchText: string) {
    this.menuService.searchMenuFilter(searchText);
  }

  onMenuChanged() {
    this.slides = [];
    for (let i = 0; i < Math.ceil(this.menuAdmin.length / 9); i++) {
      this.slides.push(i.toString());
    }
  }

  public onIndexChange(index: number) {
    console.log('Swiper index: ', index);
  }

  getMenu($event) {
    this.searchMenuInput.nativeElement.value = '';
    this.menuService.changeGroup($event);
  }
  onGroupsFilter($event) {
    this.searchMenuInput.nativeElement.value = '';
    this.menuService.subject.next($event);
    this.menuService.filterGroup($event);
  }
}

export interface IMenu {
  id?: number;
  userId?: string;
  groupId?: number;
  groupName?: string;
  appId?: number;
  appName: string;
  url?: string;
  img?: string;
  userManualPath?: string;
  type?: string;
}
