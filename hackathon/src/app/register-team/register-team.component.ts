import { Component } from '@angular/core';
import { RegisterModel } from 'src/register-model';
import { EnrollmentService } from 'src/enrollment.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-register-team',
  templateUrl: './register-team.component.html',
  styleUrls: ['./register-team.component.css']
})
export class RegisterTeamComponent {constructor(
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