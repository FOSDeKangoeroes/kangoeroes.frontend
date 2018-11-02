import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KangoeroesFrontendCoreComponent } from './kangoeroes-frontend-core.component';

describe('KangoeroesFrontendCoreComponent', () => {
  let component: KangoeroesFrontendCoreComponent;
  let fixture: ComponentFixture<KangoeroesFrontendCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KangoeroesFrontendCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KangoeroesFrontendCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
