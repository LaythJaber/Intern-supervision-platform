import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSoustacheEncadrantComponent } from './detail-soustache-encadrant.component';

describe('DetailSoustacheEncadrantComponent', () => {
  let component: DetailSoustacheEncadrantComponent;
  let fixture: ComponentFixture<DetailSoustacheEncadrantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSoustacheEncadrantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSoustacheEncadrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
