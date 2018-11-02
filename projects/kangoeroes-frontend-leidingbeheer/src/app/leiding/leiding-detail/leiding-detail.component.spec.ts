import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeidingDetailComponent } from './leiding-detail.component';

describe('LeidingDetailComponent', () => {
  let component: LeidingDetailComponent;
  let fixture: ComponentFixture<LeidingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeidingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeidingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
