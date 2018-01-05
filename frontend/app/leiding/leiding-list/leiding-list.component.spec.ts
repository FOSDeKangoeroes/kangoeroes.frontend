import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeidingListComponent } from './leiding-list.component';

describe('LeidingListComponent', () => {
  let component: LeidingListComponent;
  let fixture: ComponentFixture<LeidingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeidingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeidingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
