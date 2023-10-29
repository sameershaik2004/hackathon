import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnrollmentService } from 'src/enrollment.service';
import { PopwindComponent } from './popwind.component';

describe('PopwindComponent', () => {
  let component: PopwindComponent;
  let fixture: ComponentFixture<PopwindComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopwindComponent]
    });
    fixture = TestBed.createComponent(PopwindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
