import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeidingEditRolesComponent } from './leiding-edit-roles.component';

describe('LeidingEditRolesComponent', () => {
  let component: LeidingEditRolesComponent;
  let fixture: ComponentFixture<LeidingEditRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeidingEditRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeidingEditRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
