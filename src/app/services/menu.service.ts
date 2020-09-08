import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { KmapService } from './kmap.service';
import { AuthService } from './auth.service';
import { IMenu } from '../main/main.component';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private router: Router, private kmapService: KmapService, private auth: AuthService, private zone: NgZone) {
  }

  menu = new Subject<IMenu[]>();
  menuSeacrch = new Subject<IMenu[]>();
  currentMenu: IMenu[];
  fullMenu: IMenu[];
  searchMenu: IMenu[];
  menuSub: any;
  nowMenu = history.state;
  slides = [];
  groupList = ['ALL', '1', '2', '3'];
  groupPos = 0;
  groupSelected: string;

  subject = new Subject<string>();

  menuSwipe(event: string) {
    if (event === 'right' && this.groupPos > 0) {
      this.groupPos = this.groupPos - 1;
      this.groupSelected = this.groupList[this.groupPos];
      this.filterGroup(this.groupSelected);
    } else if (event === 'left' && this.groupPos < 3) {
      this.groupPos = this.groupPos + 1;
      this.groupSelected = this.groupList[this.groupPos];
      this.filterGroup(this.groupSelected);
    }
  }

  searchMenuFilter(event: string) {
    const data = history.state.menuAdmin;
    this.currentMenu = data.filter(r => r.appName.toUpperCase().includes(event.toUpperCase()));
    this.menu.next(this.currentMenu);
  }

  filterGroup(groupNames: string) {
    let category: string[] = ['ทั้งหมด', 'เอกสาร', 'การซ่อม', 'ยอดขาย'];
    let group: string = (groupNames == 'ALL') ? 'ทั้งหมด' : category[groupNames];
    this.currentMenu = this.fullMenu.filter(r => r.groupName.toUpperCase().includes(group.toUpperCase()));
    this.menu.next(this.currentMenu);
    this.menuSeacrch.next(this.currentMenu);

    this.groupPos = this.groupList.findIndex(r => r === groupNames);
    this.groupSelected = this.groupList[this.groupPos];
    this.subject.next(groupNames);
    this.router.navigateByUrl(`/layout/${groupNames}`,
      { state: { slides: this.slides, menuAdmin: this.currentMenu }, }
    );
  }

  changeGroup(groupId: string) {
    this.groupPos = this.groupList.findIndex(r => r == groupId);
    this.groupSelected = this.groupList[this.groupPos];
    this.getMenuInfo();
  }

  getMenuInfo(): Promise<any> {
    return this.kmapService.getMenuItem(this.auth.getPositionUserId(), this.groupSelected).toPromise().then(result => {
      this.subject.next(this.groupSelected);
      this.menu.next([...result as IMenu[]]);
      this.currentMenu = [...result as IMenu[]];
      this.fullMenu = [...result as IMenu[]];
      this.router.navigateByUrl(`/layout/${this.groupSelected}`
        , { state: { slides: this.slides, menuAdmin: this.currentMenu }, }
      );
      return result;
    });
  }

  GetCurrentGroup() {
    return this.groupSelected;
  }
}
