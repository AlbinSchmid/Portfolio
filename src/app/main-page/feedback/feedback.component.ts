import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {
  feedback = [
    {
      text: 'Albin has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the succes of our project.',
      name: 'H. Janisch - Team Partner'
    },
    {
      text: 'I had the good fortune of working with Albin in a group project at the Developer Akadmie that involved a lot of effort. He always stayed calm, cool, and focused, and made sure our team was set up for success. He is super knowledgeable, easy to with, and I did happily work with him again given the chance.',
      name: 'A. Fischer - Team Partner'
    },
    {
      text: 'Our project benefited enormously from Albin efficient way of working',
      name: 'T. Schulz - Frontend Developer'
    },
  ];
  leftFeedbackId = 0;
  mainFeedbackId = 1;
  rightFeedbackId = 2;

  changefeedback = false;

  changeMainFeedback(){
    this.changefeedback = true;
  }


}
