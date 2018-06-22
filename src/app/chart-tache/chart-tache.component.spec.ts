import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTacheComponent } from './chart-tache.component';

describe('ChartTacheComponent', () => {
  let component: ChartTacheComponent;
  let fixture: ComponentFixture<ChartTacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartTacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
