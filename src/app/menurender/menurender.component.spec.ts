import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenurenderComponent } from './menurender.component';

describe('MenurenderComponent', () => {
  let component: MenurenderComponent;
  let fixture: ComponentFixture<MenurenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenurenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenurenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
