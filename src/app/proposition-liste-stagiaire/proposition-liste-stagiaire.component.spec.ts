import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropositionListeStagiaireComponent } from './proposition-liste-stagiaire.component';

describe('PropositionListeStagiaireComponent', () => {
  let component: PropositionListeStagiaireComponent;
  let fixture: ComponentFixture<PropositionListeStagiaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropositionListeStagiaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropositionListeStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
