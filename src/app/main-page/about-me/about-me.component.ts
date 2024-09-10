import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../shared/service/language.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  imgIsHoveredAlready = false;

  constructor(public languageService: LanguageService) {}

  imgIsHovered(){
    this.imgIsHoveredAlready = true;
  }
}
