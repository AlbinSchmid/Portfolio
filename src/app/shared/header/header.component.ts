import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { PhoneMenuComponent } from './phone-menu/phone-menu.component';
import { LanguageService } from '../service/language.service';
import { WindowService } from '../service/window.service';
import { NavigationEnd, Router } from '@angular/router';
import { inherit } from 'hammerjs';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    PhoneMenuComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  windowService = inject(WindowService);
  languageService = inject(LanguageService);
  router = inject(Router);
  showPhoneMenu = false;
  headerAnimation = false;
  currentUrl: string;

  /**
   * Lifecycle hook, after data-bound properties changed.
   * The method is called when the component is initialized.
   * It calls the method to check the currently chosen language,
   * and sets up the event listeners for links to sections on the page.
   * The event listeners scroll to the linked sections when the links are clicked.
   */
  ngOnInit(): void {
    this.currentUrl = this.router.url;
    this.languageService.checkChosedLang();
  }



  /**
   * Checks the scroll position of the window and changes the state of the header
   * animation based on it. If the scroll position is greater than 90 and the
   * animation is not already running, it starts the animation. If the position is
   * less than 90 and the animation is running, it stops the animation
  */
  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 90 && !this.headerAnimation) {
      this.headerAnimation = true;
    } else if (scrollPosition < 90 && this.headerAnimation) {
      this.headerAnimation = false;
    }
  }


  /**
   * Changes the language of the application between german and english.
   * If the current language is german, it sets the english language to true and
   * the german language to false. If the current language is english, it sets
   * the english language to false and the german language to true.
   * The state of the language is stored in local storage with the key 'english'.
   */
  changeLanguage() {
    if (this.languageService.germanLanguage) {
      this.languageService.englishLanguage = true;
      this.languageService.germanLanguage = false;
    } else if (this.languageService.englishLanguage) {
      this.languageService.englishLanguage = false;
      this.languageService.germanLanguage = true;
    }
    localStorage.setItem('english', JSON.stringify(this.languageService.englishLanguage));
  }


  /**
   * Closes the phone menu by setting the showPhoneMenu variable to false. If it
   * is already false, it does nothing.
   * @param closePhoneMenu - boolean which is set to the showPhoneMenu variable
   */
  closePhoneMenu(closePhoneMenu: boolean) {
    this.showPhoneMenu = closePhoneMenu;
  }
}
