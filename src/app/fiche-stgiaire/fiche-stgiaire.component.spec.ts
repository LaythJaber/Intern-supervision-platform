import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheStgiaireComponent } from './fiche-stgiaire.component';

describe('FicheStgiaireComponent', () => {
  let component: FicheStgiaireComponent;
  let fixture: ComponentFixture<FicheStgiaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheStgiaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheStgiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
