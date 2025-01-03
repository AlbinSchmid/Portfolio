import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  router = inject(Router)
  windowWidth = innerWidth;


  /**
   * Adds a click event listener to the "projectsLink" anchor element.
   * Prevents the default action and smoothly scrolls to the "projects" section 
   * of the page, offsetting the scroll position by 100 pixels from the top.
   */
  scrollToProjects(event: Event, currentUrl?: string): void {
    let offsetTop = this.windowWidth > 750 ? 100 : 40
    currentUrl !== '/legal-notice' ? event.preventDefault() : null;
    const targetElement = document.querySelector('#projects') as HTMLElement;
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - offsetTop,
        behavior: 'smooth'
      });
    }
  }


  /**
   * Adds a click event listener to the "#skills" anchor element.
   * Prevents the default action and smoothly scrolls to the "skills" section 
   * of the page, offsetting the scroll position by 50 pixels from the top.
   */
  scrollToSkills(event: Event, currentUrl: string): void {
    currentUrl !== '/legal-notice' ? event.preventDefault() : null;
    const targetElement = document.querySelector('#skills') as HTMLElement;
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: 'smooth'
      });
    }
  }


  /**
   * Adds a click event listener to the "#about-me" anchor element.
   * Prevents the default action and smoothly scrolls to the "about-me" section 
   * of the page, offsetting the scroll position by 0 pixels from the top.
   */
  scrollToAboutMe(event: Event, currentUrl?: string): void {
    let offsetTop = this.windowWidth > 750 ? 0 : 280
    currentUrl !== '/legal-notice' ? event.preventDefault() : null;
    const targetElement = document.querySelector('#about-me') as HTMLElement;
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop + offsetTop,
        behavior: 'smooth'
      });
    }
  }


  /**
 * Adds a click event listener to the "#contact" anchor element.
 * Prevents the default action and smoothly scrolls to the "contact" section 
 * of the page, offsetting the scroll position by 50 pixels from the top.
 */
  scrollingToContact(event: Event) {
    event.preventDefault();
    const targetElement = document.querySelector('#contact') as HTMLElement;
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: 'smooth'
      });
    }
  }
}
