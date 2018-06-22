import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEncadrantComponent } from './new-encadrant.component';

describe('NewEncadrantComponent', () => {
  let component: NewEncadrantComponent;
  let fixture: ComponentFixture<NewEncadrantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEncadrantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEncadrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
