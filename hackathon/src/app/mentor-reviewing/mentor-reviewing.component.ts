import { Component } from '@angular/core';

@Component({
  selector: 'app-mentor-reviewing',
  templateUrl: './mentor-reviewing.component.html',
  styleUrls: ['./mentor-reviewing.component.css']
})
export class MentorReviewingComponent {
  juryReviews = [
    { title: 'Review 1', content: 'This is the first jury review.' },
    { title: 'Review 2', content: 'This is the second jury review.' },
    // Add more reviews as needed
  ];
}
