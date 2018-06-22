import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTacheEncadrantComponent } from './liste-tache-encadrant.component';

describe('ListeTacheEncadrantComponent', () => {
  let component: ListeTacheEncadrantComponent;
  let fixture: ComponentFixture<ListeTacheEncadrantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeTacheEncadrantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeTacheEncadrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
