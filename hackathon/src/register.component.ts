import { Component } from '@angular/core';
import { RegisterModel } from '../register-model';
import { EnrollmentService } from '../enrollment.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private _enrollmentService: EnrollmentService,
    private router: Router
  ) {}
  registerModel = new RegisterModel('', '', '', '');
  result: any;

  onRegister() {
    console.log(this.registerModel);
    this._enrollmentService.registerService(this.registerModel).subscribe(
      (data) => {
        console.log(data);
        this.result = data;
        if (this.result.message ==="account created successsully") {
          this.router.navigate(['/popwind']);
          console.log(this.result);
        }
      },
      (error) => console.error(error)
    );
  }
}
