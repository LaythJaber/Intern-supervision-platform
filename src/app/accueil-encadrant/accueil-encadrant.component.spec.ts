import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilEncadrantComponent } from './accueil-encadrant.component';

describe('AccueilEncadrantComponent', () => {
  let component: AccueilEncadrantComponent;
  let fixture: ComponentFixture<AccueilEncadrantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilEncadrantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilEncadrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
