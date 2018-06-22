import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentiteStagiaireComponent } from './identite-stagiaire.component';

describe('IdentiteStagiaireComponent', () => {
  let component: IdentiteStagiaireComponent;
  let fixture: ComponentFixture<IdentiteStagiaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentiteStagiaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentiteStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
