import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { LanguageService } from '../../shared/service/language.service';
import { WindowService } from '../../shared/service/window.service';

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
  languageService = inject(LanguageService);
  windowService = inject(WindowService)
  imgIsHoveredAlready = false;
}
