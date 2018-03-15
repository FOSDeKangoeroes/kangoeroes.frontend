import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppForbiddenComponent } from './app-forbidden.component';

describe('AppForbiddenComponent', () => {
  let component: AppForbiddenComponent;
  let fixture: ComponentFixture<AppForbiddenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppForbiddenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppForbiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
