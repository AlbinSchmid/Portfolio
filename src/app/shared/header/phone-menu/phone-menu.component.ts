import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LanguageService } from '../../service/language.service';

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
  @Input() showPhoneMenu = false;
  @Output() closeMenu = new EventEmitter<boolean>();
  germanLanguage: boolean = true;
  englishLanguage: boolean = false;


  constructor(public languageService: LanguageService) {}


  /**
   * we send this to the parent, then we can close it
   */
  closePhoneMenu(){
    this.showPhoneMenu = false;
    this.closeMenu.emit(this.showPhoneMenu)
  }


  /**
   * when language button on phone get clicked we change the language
   */
  changeLanguage(){
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
