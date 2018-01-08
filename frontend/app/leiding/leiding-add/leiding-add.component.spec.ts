import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeidingAddComponent } from './leiding-add.component';

describe('LeidingAddComponent', () => {
  let component: LeidingAddComponent;
  let fixture: ComponentFixture<LeidingAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeidingAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeidingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
