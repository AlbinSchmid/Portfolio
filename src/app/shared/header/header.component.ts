import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PhoneMenuComponent } from './phone-menu/phone-menu.component';
import { LanguageService } from '../service/language.service';


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
  showPhoneMenu = false;

  constructor(public languageService: LanguageService) {
    languageService.checkChosedLang();
  }


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


  openPhoneMenu() {
    this.showPhoneMenu = true;
  }


  closePhoneMenu(closePhoneMenu: boolean) {
    this.showPhoneMenu = closePhoneMenu;
  }
}
