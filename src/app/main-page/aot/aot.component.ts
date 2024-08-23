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
  changeImgSrc(mouseLocation: string){
    if (mouseLocation == 'atImg') {
      this.gitImgSrc = 'white';
    } else if(mouseLocation == 'outImg'){
      this.gitImgSrc = 'blue';
    }
  }
}
