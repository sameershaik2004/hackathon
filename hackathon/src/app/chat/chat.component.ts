import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  chatMessages: Array<{ content: string }> = [];
  newMessage: string = '';

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  intervalId: any;

  ngOnInit() {
    this.startTimer(1); // 1 day timer
  }

  sendMessage() {
    if (this.newMessage) {
      this.chatMessages.push({ content: this.newMessage });
      this.newMessage = ''; // Clear the input field
    }
  }

  startTimer(duration: number) {
    let time = duration * 24 * 60 * 60; // convert duration from days to seconds
    this.intervalId = setInterval(() => {
      this.days = Math.floor(time / (24 * 60 * 60));
      this.hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
      this.minutes = Math.floor((time % (60 * 60)) / (60));
      this.seconds = time % (60);

      time--;
      if (time < 0) {
        clearInterval(this.intervalId);
      }
    }, 1000);
  }
}
