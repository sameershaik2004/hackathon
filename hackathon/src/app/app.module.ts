import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OptionComponent } from './option/option.component';
import { RegisterMentorComponent } from './register-mentor/register-mentor.component';
import { RegisterTeamComponent } from './register-team/register-team.component';
import { LoginTeamComponent } from './login-team/login-team.component';
import { LoginMentorComponent } from './login-mentor/login-mentor.component';
import { PopwindComponent } from './popwind/popwind.component';
import { CheckpointComponent } from './checkpoint/checkpoint.component';
import { JuryReviewComponent } from './jury-review/jury-review.component';
import { ChatComponent } from './chat/chat.component';
import { MentorReviewingComponent } from './mentor-reviewing/mentor-reviewing.component';
import { DummyComponent } from './dummy/dummy.component';

@NgModule({
  declarations: [
    AppComponent,
    OptionComponent,
    RegisterMentorComponent,
    RegisterTeamComponent,
    LoginTeamComponent,
    LoginMentorComponent,
    PopwindComponent,
    CheckpointComponent,
    JuryReviewComponent,
    ChatComponent,
    MentorReviewingComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
