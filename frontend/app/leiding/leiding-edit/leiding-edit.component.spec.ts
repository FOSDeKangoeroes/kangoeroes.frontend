import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeidingEditComponent } from './leiding-edit.component';

describe('LeidingEditComponent', () => {
  let component: LeidingEditComponent;
  let fixture: ComponentFixture<LeidingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeidingEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeidingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
