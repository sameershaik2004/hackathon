import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorReviewingComponent } from './mentor-reviewing.component';

describe('MentorReviewingComponent', () => {
  let component: MentorReviewingComponent;
  let fixture: ComponentFixture<MentorReviewingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MentorReviewingComponent]
    });
    fixture = TestBed.createComponent(MentorReviewingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
