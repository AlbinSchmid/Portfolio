import { Component } from '@angular/core';

@Component({
  selector: 'app-aot',
  standalone: true,
  imports: [],
  templateUrl: './aot.component.html',
  styleUrl: './aot.component.scss'
})
export class AotComponent {
  gitImgSrc = 'blue';
  emailImgSrc = 'blue';

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
