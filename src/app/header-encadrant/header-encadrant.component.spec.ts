import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEncadrantComponent } from './header-encadrant.component';

describe('HeaderEncadrantComponent', () => {
  let component: HeaderEncadrantComponent;
  let fixture: ComponentFixture<HeaderEncadrantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderEncadrantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderEncadrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
