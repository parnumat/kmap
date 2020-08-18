import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprenderComponent } from './apprender.component';

describe('ApprenderComponent', () => {
  let component: ApprenderComponent;
  let fixture: ComponentFixture<ApprenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
