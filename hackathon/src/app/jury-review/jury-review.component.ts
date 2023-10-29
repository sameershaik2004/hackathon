// jury-review.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-jury-review',
  templateUrl: './jury-review.component.html',
  styleUrls: ['./jury-review.component.css']
})
export class JuryReviewComponent {
  juryReviews = [
    { title: 'Review 1', content: 'This is the first jury review.' },
    { title: 'Review 2', content: 'This is the second jury review.' },
    // Add more reviews as needed
  ];
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  intervalId: any;

  ngOnInit() {
    this.startTimer(1); // 1 day timer
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
