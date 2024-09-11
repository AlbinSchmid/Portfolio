import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../shared/service/language.service';

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
  currentFeedback = 1;
  reverse = false;
  forwardNumerator = 0;
  reverseNumerator = 0;

  
  constructor(public languageService: LanguageService) {}


  /**
   * change the showed feedback
   * @param i - to increase or decrease
   */
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
      this.currentFeedback = this.currentFeedback % 3;
    }
  }


  /**
   * checked which feedback get which css class
   * @param id - which feedback
   * @returns css class who get added
   */
  checkMainFeedback(id: number): string {
    const isCurrent = id === this.currentFeedback;
    const isPrevious = id === (this.currentFeedback - 1 + 3) % 3;
    const isNext = id === (this.currentFeedback + 1) % 3;

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
