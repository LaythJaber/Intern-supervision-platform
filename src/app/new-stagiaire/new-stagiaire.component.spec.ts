import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStagiaireComponent } from './new-stagiaire.component';

describe('NewStagiaireComponent', () => {
  let component: NewStagiaireComponent;
  let fixture: ComponentFixture<NewStagiaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStagiaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
