import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilResponsableComponent } from './accueil-responsable.component';

describe('AccueilResponsableComponent', () => {
  let component: AccueilResponsableComponent;
  let fixture: ComponentFixture<AccueilResponsableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilResponsableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
