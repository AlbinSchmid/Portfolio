import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { PhoneMenuComponent } from './phone-menu/phone-menu.component';
import { LanguageService } from '../service/language.service';
import { WindowServiceService } from '../service/window.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    PhoneMenuComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  windowService = inject(WindowServiceService);
  languageService = inject(LanguageService);
  showPhoneMenu = false;
  headerAnimation = false;


  /**
   * Lifecycle hook, after data-bound properties changed.
   * The method is called when the component is initialized.
   * It calls the method to check the currently chosen language,
   * and sets up the event listeners for links to sections on the page.
   * The event listeners scroll to the linked sections when the links are clicked.
   */
  ngOnInit(): void {
    this.languageService.checkChosedLang();
    this.scrollToProjects();
    this.scrollToSkills();
    this.scrollToAboutMe();
  }

  
  /**
   * Adds a click event listener to the "projectsLink" anchor element.
   * Prevents the default action and smoothly scrolls to the "projects" section 
   * of the page, offsetting the scroll position by 100 pixels from the top.
   */
  scrollToProjects() {
    document.querySelector('a[href="#projects"]')?.addEventListener('click', (event) => {
      event.preventDefault();
      const targetElement = document.querySelector('#projects') as HTMLElement;
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  }


  /**
   * Adds a click event listener to the "#skills" anchor element.
   * Prevents the default action and smoothly scrolls to the "skills" section 
   * of the page, offsetting the scroll position by 50 pixels from the top.
   */
  scrollToSkills() {
    document.querySelector('a[href="#skills"]')?.addEventListener('click', (event) => {
      event.preventDefault();
      const targetElement = document.querySelector('#skills') as HTMLElement;
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: 'smooth'
        });
      }
    });
  }


  /**
   * Adds a click event listener to the "#about-me" anchor element.
   * Prevents the default action and smoothly scrolls to the "about-me" section 
   * of the page, offsetting the scroll position by 0 pixels from the top.
   */
  scrollToAboutMe() {
    document.querySelector('a[href="#about-me"]')?.addEventListener('click', (event) => {
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
