import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PhoneMenuComponent } from './phone-menu/phone-menu.component';


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
  germanLanguage: boolean = true;
  englishLanguage: boolean = false;
  showPhoneMenu = false;


  changeLanguage(){
    if (this.germanLanguage) {
      this.englishLanguage = true;
      this.germanLanguage = false;
    } else if (this.englishLanguage) {
      this.englishLanguage = false;
      this.germanLanguage = true;
    }
  }

  openPhoneMenu() {
    this.showPhoneMenu = true;
  }

  closePhoneMenu(closePhoneMenu: boolean) {
    this.showPhoneMenu = closePhoneMenu;
  }
}
