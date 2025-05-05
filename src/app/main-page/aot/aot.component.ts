import { Component, ElementRef, HostListener, inject, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../shared/service/language.service';
import { HeaderComponent } from '../../shared/header/header.component';
import { BrowserTypeService } from '../../shared/service/browser-type.service';
import { debounceTime, fromEvent } from 'rxjs';
import { WindowService } from '../../shared/service/window.service';

@Component({
  selector: 'app-aot',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './aot.component.html',
  styleUrl: './aot.component.scss'
})

export class AotComponent {
  browserTypeOnTouchService = inject(BrowserTypeService)
  languageService = inject(LanguageService);
  windowService = inject(WindowService)
  gitImgSrc = 'blue';
  emailImgSrc = 'blue';
  windowWith = window.innerWidth;


  /**
   * Initializes a resize listener on the window that updates the windowWith property
   * with the current inner width of the window, debounced by 200ms.
   */
  initResizeListener() {
    fromEvent(window, 'resize')
      .pipe(
        debounceTime(50)
      )
      .subscribe(() => {
        this.windowWith = window.innerWidth;
      });
  }


  /**
   * Lifecycle hook that is called after the component is initialized.
   * If the window's inner width is greater than 750 pixels, it scrolls to the "projects" section.
   * Always sets up scrolling to the "contact" section.
   */
  ngOnInit() {
    this.initResizeListener();
  }


  /**
 * Adds a click event listener to the "#about-me" anchor element.
 * Prevents the default action and smoothly scrolls to the "about-me" section 
 * of the page, offsetting the scroll position by 0 pixels from the top.
 */
  scrollToAboutMe() {
    document.querySelector('a[id="aboutMeLink"]')?.addEventListener('click', (event) => {
      event.preventDefault();
      const targetElement = document.querySelector('#about-me') as HTMLElement;
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 0,
          behavior: 'smooth'
        });
      }
    });
  }


  /**
   * Toggles the color of the icon which was hovered from blue to white and vice versa
   * @param whichIcon - string which icon was hovered
   */
  changeImgSrc(whichIcon: string) {
    if (whichIcon == 'git') {
      this.gitImgSrc == 'blue' ? this.gitImgSrc = 'white' : this.gitImgSrc = 'blue';
    } else {
      this.emailImgSrc == 'blue' ? this.gitImgSrc = 'white' : this.gitImgSrc = 'blue';
    }
  }
}


