import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionComponent } from './option/option.component';
import { RegisterMentorComponent } from './register-mentor/register-mentor.component';
import { RegisterTeamComponent } from './register-team/register-team.component';
import { LoginMentorComponent } from './login-mentor/login-mentor.component';
import { LoginTeamComponent } from './login-team/login-team.component';
import { PopwindComponent } from './popwind/popwind.component';
import { CheckpointComponent } from './checkpoint/checkpoint.component';
import { ChatComponent } from './chat/chat.component';
import { JuryReviewComponent } from './jury-review/jury-review.component';
import { MentorReviewingComponent } from './mentor-reviewing/mentor-reviewing.component';


const routes: Routes = [
    { path: '', redirectTo: '/option', pathMatch: 'full' },
    { path: 'popwind', component: PopwindComponent },
    { path: 'option', component: OptionComponent },
    { path: 'register_mentor', component: RegisterMentorComponent },
    { path: 'register_team', component: RegisterTeamComponent },
    { path: 'login_mentor', component: LoginMentorComponent },
    { path: 'login_team', component: LoginTeamComponent },
    { path: 'checkpoint', component: CheckpointComponent },
    { path: 'chat', component: ChatComponent },
    { path: 'jury', component:JuryReviewComponent},
    {path:'mentorreview',component:MentorReviewingComponent}
  ];
  
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }