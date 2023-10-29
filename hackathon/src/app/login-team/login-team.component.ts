import { Component } from '@angular/core';
import { LoginModel } from 'src/login-model';
import { EnrollmentService } from 'src/enrollment.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-team',
  templateUrl: './login-team.component.html',
  styleUrls: ['./login-team.component.css']
})
export class LoginTeamComponent {
  loginModel = new LoginModel("","");
  result: any;
  constructor(
    private _enrollmentService: EnrollmentService,
    private router: Router
  ) {}

  onLogin() {
    if(this.loginModel.email && this.loginModel.password) {
      console.log(this.loginModel);
      this._enrollmentService.loginService(this.loginModel).subscribe(
        (data) => {
          console.log(data);
          this.result = data;
          if (this.result.message === 'valid Login') {
            this.router.navigate(['/popwind']);
            console.log(this.result);
          }
        },
        (error) => {
          console.error(error);
          alert('An error occurred. Please try again.');
        }
      );
    } else {
      alert('Please fill in all fields.');
    }
  }
}
