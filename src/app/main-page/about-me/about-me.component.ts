import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
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
  aotAnimation = false;

  constructor(public languageService: LanguageService) { }

  /**
   * when image get hovered set it true
   */
  imgIsHovered() {
    this.imgIsHoveredAlready = true;
  }


  /**
   * controlls when text-div get the animation with scrolling
   */
  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 450 && !this.aotAnimation) {
      this.aotAnimation = true;
    }
  }
}
