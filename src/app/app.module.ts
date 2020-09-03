import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragScrollModule } from 'ngx-drag-scroll';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { headerComponent } from './header/header.component';
import { mainComponent } from './main/main.component';
import { footerComponent } from './footer/footer.component';
import { layoutComponent } from './layout/layout.component';
import { loginComponent } from './login/login.component';
import { AlertModule } from 'ngx-bootstrap/Alert';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MenurenderComponent } from './menurender/menurender.component';
import { ErrorInterceptorProvider } from './services/error.interceptor';
import { environment } from 'src/environments/environment';
import { ApprenderComponent } from './apprender/apprender.component';
import { ServiceWorkerModule } from '@angular/service-worker';

import * as Hammer from 'hammerjs';

// making hammer config (3)
export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    swipe: { direction: Hammer.DIRECTION_HORIZONTAL },
    'pinch': { enable: false },
    'rotate': { enable: false }
  };
}

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

export function jwtOptionsFactory() {
  return {
    tokenGetter: () => {
      return localStorage.getItem('token'); //เก็บtoken
    },
    whitelistedDomains: environment.whitelist, //คือพาทที่จะส่งtokenแนบไปด้วย
    blacklistedRoutes: environment.blacklisted //คือพาทที่ไม่ต้องส่ง jwt พวกที่ลงท้ายด้วย auth เชื่อมกับ environment
  }
}
@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    mainComponent,
    footerComponent,
    loginComponent,
    layoutComponent,
    MenurenderComponent,
    ApprenderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    SelectDropDownModule,
    BrowserAnimationsModule,
    DragScrollModule,
    SwiperModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
      progressBar: true,
      progressAnimation: 'decreasing',
    }),
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory
      }
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HammerModule
  ],
  providers: [{
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }, { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
