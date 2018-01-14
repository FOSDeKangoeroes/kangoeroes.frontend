import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeidingTableComponent } from './leiding-table.component';

describe('LeidingTableComponent', () => {
  let component: LeidingTableComponent;
  let fixture: ComponentFixture<LeidingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeidingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeidingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
