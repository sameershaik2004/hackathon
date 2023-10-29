import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMentorComponent } from './login-mentor.component';

describe('LoginMentorComponent', () => {
  let component: LoginMentorComponent;
  let fixture: ComponentFixture<LoginMentorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginMentorComponent]
    });
    fixture = TestBed.createComponent(LoginMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
