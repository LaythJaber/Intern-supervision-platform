import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheSoustacheComponent } from './fiche-soustache.component';

describe('FicheSoustacheComponent', () => {
  let component: FicheSoustacheComponent;
  let fixture: ComponentFixture<FicheSoustacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheSoustacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheSoustacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
