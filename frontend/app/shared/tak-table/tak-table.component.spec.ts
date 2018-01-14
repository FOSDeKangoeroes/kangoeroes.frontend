import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakTableComponent } from './tak-table.component';

describe('TakTableComponent', () => {
  let component: TakTableComponent;
  let fixture: ComponentFixture<TakTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
