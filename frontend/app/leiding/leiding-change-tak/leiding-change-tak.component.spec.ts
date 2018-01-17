import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeidingChangeTakComponent } from './leiding-change-tak.component';

describe('LeidingChangeTakComponent', () => {
  let component: LeidingChangeTakComponent;
  let fixture: ComponentFixture<LeidingChangeTakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeidingChangeTakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeidingChangeTakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
