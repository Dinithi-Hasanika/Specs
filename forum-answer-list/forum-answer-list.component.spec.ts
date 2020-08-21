import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumAnswerListComponent } from './forum-answer-list.component';

describe('ForumAnswerListComponent', () => {
  let component: ForumAnswerListComponent;
  let fixture: ComponentFixture<ForumAnswerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumAnswerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumAnswerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
