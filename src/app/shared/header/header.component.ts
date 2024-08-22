import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  germanLanguage: boolean = true;
  englishLanguage: boolean = false;


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
