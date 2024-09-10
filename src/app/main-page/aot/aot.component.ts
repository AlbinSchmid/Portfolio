import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../shared/service/language.service';

@Component({
  selector: 'app-aot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aot.component.html',
  styleUrl: './aot.component.scss'
})



export class AotComponent {
  gitImgSrc = 'blue';
  emailImgSrc = 'blue';

  constructor(public languageService: LanguageService) {}

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


