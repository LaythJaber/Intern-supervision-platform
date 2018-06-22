import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilStagiaireComponent } from './profil-stagiaire.component';

describe('ProfilStagiaireComponent', () => {
  let component: ProfilStagiaireComponent;
  let fixture: ComponentFixture<ProfilStagiaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilStagiaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
