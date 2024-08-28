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
  currentMain = 1;

  changefeedback = false;

  changeMainFeedback() {
    this.currentMain--;
    if (this.currentMain <= -1) {
      this.currentMain = this.feedback.length - 1;
    }
    console.log(this.currentMain);

    console.log(this.feedback[this.currentMain]);

    this.changefeedback = true;
  }

  choseWhichAnimation0() {
    if (this.currentMain == 2 && this.changefeedback) {
      return 'main-to-right';
    } else if (this.currentMain == 0 && this.changefeedback) {
      return 'left-to-main';
    } else if (this.currentMain == 1 && this.changefeedback) {
      return 'right-to-left';
    } else  {
      return 'left-feedback';
    } 
  }

  choseWhichAnimation1() {
    if (this.currentMain == 0) {
      return 'main-to-right';
    } else if (this.currentMain == 1 && this.changefeedback) {
      return 'left-to-main';
    } else if (this.currentMain == 2 && this.changefeedback) {
      return 'right-to-left';
    } else  {
      return 'main-feedback';
    } 
  }

  choseWhichAnimation2() {
    if (this.currentMain == 1 && this.changefeedback) {
      return 'main-to-right';
    } else if (this.currentMain == 2 && this.changefeedback) {
      return 'left-to-main';
    } else if (this.currentMain == 0 && this.changefeedback) {
      return 'right-to-left';
    } else  {
      return 'right-feedback';
    } 
  }
}
