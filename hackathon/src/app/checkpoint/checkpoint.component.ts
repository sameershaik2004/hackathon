// checkpoint.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-checkpoint',
  templateUrl: './checkpoint.component.html',
  styleUrls: ['./checkpoint.component.css']
})
export class CheckpointComponent {
  checkpoints = [
    { name: 'Checkpoint 1', description: 'Description for Checkpoint 1' },
    { name: 'Checkpoint 2', description: 'Description for Checkpoint 2' },
    { name: 'Checkpoint 3', description: 'Description for Checkpoint 3' }
  ];

  checkpoint = {
    name: '',
    description: ''
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

  submitCheckpoint() {
    // Handle checkpoint submission logic here
    console.log('Checkpoint submitted:', this.checkpoint);
    // You may want to send the data to a service or API
    // Add the new checkpoint to the list
    this.checkpoints.push({ ...this.checkpoint });
    // Reset the form
    this.checkpoint = { name: '', description: '' };
  }

  handleFileInput(event: any) {
    // Handle file upload logic here
    const file = event.target.files[0];
    console.log('Uploaded file:', file);
    // You may want to send the file to a service or API
  }
}
