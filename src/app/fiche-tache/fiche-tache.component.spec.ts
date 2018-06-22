import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheTacheComponent } from './fiche-tache.component';

describe('FicheTacheComponent', () => {
  let component: FicheTacheComponent;
  let fixture: ComponentFixture<FicheTacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheTacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
