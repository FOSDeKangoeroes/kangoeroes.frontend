import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakAddComponent } from './tak-add.component';

describe('TakAddComponent', () => {
  let component: TakAddComponent;
  let fixture: ComponentFixture<TakAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
