import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  closePhoneMenu(){
    this.showPhoneMenu = false;
    this.closeMenu.emit(this.showPhoneMenu)
  }

  changeLanguage(){
    if (this.germanLanguage) {
      this.englishLanguage = true;
      this.germanLanguage = false;
    } else if (this.englishLanguage) {
      this.englishLanguage = false;
      this.germanLanguage = true;
    }
  }
}
