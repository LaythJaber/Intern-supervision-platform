import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTacheEncadrantComponent } from './detail-tache-encadrant.component';

describe('DetailTacheEncadrantComponent', () => {
  let component: DetailTacheEncadrantComponent;
  let fixture: ComponentFixture<DetailTacheEncadrantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTacheEncadrantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTacheEncadrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
