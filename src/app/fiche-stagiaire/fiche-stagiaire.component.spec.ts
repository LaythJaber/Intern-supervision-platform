import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheStagiaireComponent } from './fiche-stagiaire.component';

describe('FicheStagiaireComponent', () => {
  let component: FicheStagiaireComponent;
  let fixture: ComponentFixture<FicheStagiaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheStagiaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
