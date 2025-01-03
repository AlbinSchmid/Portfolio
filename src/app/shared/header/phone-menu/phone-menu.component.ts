import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { LanguageService } from '../../service/language.service';
import { WindowService } from '../../service/window.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-menu',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './phone-menu.component.html',
  styleUrl: './phone-menu.component.scss'
})
export class PhoneMenuComponent {
  languageService = inject(LanguageService);
  windowService = inject(WindowService)
  router = inject(Router)
  @Input() showPhoneMenu = false;
  @Output() closeMenu = new EventEmitter<boolean>();
  germanLanguage: boolean = true;
  englishLanguage: boolean = false;
  currentUrl: string;


  /**
   * checked current Url
   * check in Service witch language is activated
   */
  ngOnInit(): void {
    this.currentUrl = this.router.url;
    this.languageService.checkChosedLang();
  }


  /**
   * Closes the phone menu by setting the showPhoneMenu property to false
   * and emits an event to notify the parent component.
   */
  closePhoneMenu() {
    this.showPhoneMenu = false;
    this.closeMenu.emit(this.showPhoneMenu)
  }


  /**
   * Changes the language of the application between English and German.
   * If the current language is German, it sets the English language to true and the German language to false.
   * If the current language is English, it sets the English language to false and the German language to true.
   * The chosen language is stored in local storage.
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
}
