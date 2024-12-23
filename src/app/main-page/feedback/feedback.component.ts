import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { LanguageService } from '../../shared/service/language.service';
import Hammer from 'hammerjs';
import { HammerModule } from '@angular/platform-browser';


@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [
    CommonModule,
    HammerModule
  ],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {
  languageService = inject(LanguageService);
  @ViewChild('swipeArea', { static: true }) swipeArea!: ElementRef;
  currentFeedback = 1;
  forwardNumerator = 0;
  reverseNumerator = 0;
  reverse = false;


  /**
   * Lifecycle hook that is called after the component is initialized.
   * It sets up the event listeners for swiping on the element with the class "swipe-area".
   * The event listeners call the changeMainFeedback method with -1 or 1 as argument based on the direction of the swipe.
   */
  ngOnInit() {
    const hammer = new Hammer(this.swipeArea.nativeElement);
    hammer.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: 10 });
    hammer.on('swiperight', () => this.changeMainFeedback(-1));
    hammer.on('swipeleft', () => this.changeMainFeedback(1));
  }


  /**
   * @description
   * Changes the current feedback to the one at i index from the current one.
   * If i is -1, the feedbacks will be displayed in reverse order.
   * @param i - the index of the new feedback to display
   */
  changeMainFeedback(i: number) {
    if (i == -1) {
      this.reverseChangeFeedback(i);
    } else {
      this.changeFeedback(i)
    }
  }


  /**
   * @description
   * Changes the current feedback to the one at i index from the current one in reverse order.
   * @param i - the index of the new feedback to display
   */
  reverseChangeFeedback(i: number) {
    this.reverse = false;
    this.reverseNumerator = 0;
    this.forwardNumerator++;

    this.currentFeedback += i;
    if (this.currentFeedback == -1) {
      this.currentFeedback = 2;
    }
  }


  /**
   * @description
   * Changes the current feedback to the one at i index from the current one in normal order.
   * @param i - the index of the new feedback to display
   */
  changeFeedback(i: number) {
    this.reverse = true;
    this.forwardNumerator = 0;

    this.reverseNumerator++;
    this.currentFeedback += i;
    this.currentFeedback = this.currentFeedback % 3;
  }


  /**
   * @description
   * Returns a string class name based on the position of the feedback
   * relative to the current one. This is used to animate the feedbacks
   * when changing the current one.
   * @param id - the id of the feedback to check
   * @returns a string class name
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
