import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuryReviewComponent } from './jury-review.component';

describe('JuryReviewComponent', () => {
  let component: JuryReviewComponent;
  let fixture: ComponentFixture<JuryReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JuryReviewComponent]
    });
    fixture = TestBed.createComponent(JuryReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
