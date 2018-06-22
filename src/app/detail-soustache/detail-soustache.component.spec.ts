import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSoustacheComponent } from './detail-soustache.component';

describe('DetailSoustacheComponent', () => {
  let component: DetailSoustacheComponent;
  let fixture: ComponentFixture<DetailSoustacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSoustacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSoustacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
