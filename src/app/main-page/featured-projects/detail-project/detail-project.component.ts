import { Component, inject, Input } from '@angular/core';
import { Projects } from '../../../interfaces/projects.interface';

@Component({
  selector: 'app-detail-project',
  standalone: true,
  imports: [
  ],
  templateUrl: './detail-project.component.html',
  styleUrl: './detail-project.component.scss'
})
export class DetailProjectComponent {
  @Input() currentProject: Projects = {
    id: '',
    name: '',
    description: '',
    gitHub: '',
    liveTest: '',
    img: '',
    skills: [
      {
        name: '',
        img: '',
      },
      {
        name: '',
        img: '',
      },
      {
        name: '',
        img: '',
      },
      {
        name: '',
        img: '',
      },
      {
        name: '',
        img: '',
      },
    ],
  };
  closeImg = 'cross-white';

  changeImg(){
    this.closeImg = 'cross-blue-big';
  }
}
