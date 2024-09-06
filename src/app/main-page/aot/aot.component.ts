import { Component } from '@angular/core';
import { LanguageService } from '../../shared/service/language.service';

@Component({
  selector: 'app-aot',
  standalone: true,
  imports: [],
  templateUrl: './aot.component.html',
  styleUrl: './aot.component.scss'
})
export class AotComponent {
  language = {
    headline: {
      en: 'Frontend Developer',
      de: 'Frontend Entwickler',
    },
    buttonLeft: {
      en: 'Check my work',
      de: 'Meine Arbeit',
    },
    buttonRight: {
      en: 'Contact me',
      de: 'Schreibe mir',
    }
  };
  gitImgSrc = 'blue';
  emailImgSrc = 'blue';

  constructor(private languageService: LanguageService) {

  }

  changeImgSrc(whichIcon: string){
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
