import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../shared/service/language.service';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-aot',
  standalone: true,
  imports: [CommonModule,
    HeaderComponent
  ],
  templateUrl: './aot.component.html',
  styleUrl: './aot.component.scss'
})

export class AotComponent {
  gitImgSrc = 'blue';
  emailImgSrc = 'blue';

  constructor(public languageService: LanguageService) {
    
  }

  /**
   * When image is hovered change the current img source
   * @param whichIcon - which icon should change
   */
  changeImgSrc(whichIcon: string) {
    if (whichIcon == 'git') {
      if (this.gitImgSrc == 'blue') {
        this.gitImgSrc = 'white';
      } else {
        this.gitImgSrc = 'blue';
      }
    } else {
      if (this.emailImgSrc == 'blue') {
        this.emailImgSrc = 'white';
      } else {
        this.emailImgSrc = 'blue';
      }
    }
  }

}


