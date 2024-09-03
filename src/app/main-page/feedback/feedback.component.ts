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
        this.currentFeedback += i;
        if (this.currentFeedback == -1) {
          this.currentFeedback = 2;
        }
    } else {
        this.currentFeedback += i;
        this.currentFeedback = this.currentFeedback % this.feedback.length;
        this.reverse = true;
    }
  }

  checkMainFeedback(id: number) {
    if (id == this.currentFeedback) {
      if (this.reverse) {
        return 'right-feedback-reverse'
      } else {
        return `main-feedback-normal`;
      }
    } else if (this.besideFeedback(id, 'right')) {
      if (this.reverse) {
        return 'left-feedback-reverse'
      } else {
        return `right-feedback-normal`;
      }
    } else if (this.besideFeedback(id, 'left')) {
      if (this.reverse) {
        return 'main-feedback-reverse'
      } else {
        return `left-feedback-normal`;
      }
    } else {
      return
    }
  }

  besideFeedback(id: number, position: string) {
    if (position == 'left') {
      if (this.currentFeedback - 1 == -1) {
        return id == 2
      } else {
        return id == this.currentFeedback - 1;
      }

    } else {
      if (this.currentFeedback + 1 == 3) {
        return id == 0
      } else {
        return id == this.currentFeedback + 1;
      }
    }
  }
}
