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
  currentFeedback = 1;
  reverse = false;
  forwardNumerator = 0;
  reverseNumerator = 0;

  changeMainFeedback(i: number) {
    if (i == -1) {
      this.reverse = false;
      this.reverseNumerator = 0;
      this.forwardNumerator++;

      this.currentFeedback += i;
      if (this.currentFeedback == -1) {
        this.currentFeedback = 2;
      }
    } else {
      this.reverse = true;
      this.forwardNumerator = 0;

      this.reverseNumerator++;
      this.currentFeedback += i;
      this.currentFeedback = this.currentFeedback % this.feedback.length;
    }
  }


  checkMainFeedback(id: number): any {
    const isCurrent = id === this.currentFeedback;
    const isPrevious = id === (this.currentFeedback - 1 + this.feedback.length) % this.feedback.length;
    const isNext = id === (this.currentFeedback + 1) % this.feedback.length;

    if (isCurrent) {
        return this.reverse ? 'right-feedback-reverse' : 'main-feedback-normal';
    } else if (isNext) {
      return this.reverse ? 'left-feedback-reverse' : 'right-feedback-normal';
    } else if (isPrevious) {
      return this.reverse ? 'main-feedback-reverse' : 'left-feedback-normal';
    } else {
      return '';
    }
  }
}
