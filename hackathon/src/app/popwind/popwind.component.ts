import { Component, OnInit } from '@angular/core';

interface Idea {
  title: string;
  description: string;
  votes: number;
}

@Component({
  selector: 'app-popwind',
  templateUrl: './popwind.component.html',
  styleUrls: ['./popwind.component.css']
})
export class PopwindComponent implements OnInit {
  ideas: Idea[] = [
    { title: 'Revolutionary App Idea', description: 'A groundbreaking app that will change lives.', votes: 10 },
    { title: 'Green Energy Solution', description: 'Harnessing renewable energy for a sustainable future.', votes: 8 },
    { title: 'Community Garden Project', description: 'Creating green spaces for everyone to enjoy.', votes: 5 },
  ];

  newIdea: Idea = {
    title: '',
    description: '',
    votes: 0
  };

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

  // Increments the vote count for the selected idea
  voteForIdea(idea: Idea): void {
    idea.votes++;
  }

  // Adds a new idea to the list
  addIdea(): void {
    if (this.newIdea.title && this.newIdea.description) {
      this.ideas.push({ ...this.newIdea });
      this.resetNewIdea();
    }
  }

  // Resets the new idea form
  private resetNewIdea(): void {
    this.newIdea = { title: '', description: '', votes: 0 };
  }
}
