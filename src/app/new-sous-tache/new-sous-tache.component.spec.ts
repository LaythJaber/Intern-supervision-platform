import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSousTacheComponent } from './new-sous-tache.component';

describe('NewSousTacheComponent', () => {
  let component: NewSousTacheComponent;
  let fixture: ComponentFixture<NewSousTacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSousTacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSousTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
