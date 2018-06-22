import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatEncadrantComponent } from './chat-encadrant.component';

describe('ChatEncadrantComponent', () => {
  let component: ChatEncadrantComponent;
  let fixture: ComponentFixture<ChatEncadrantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatEncadrantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatEncadrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
