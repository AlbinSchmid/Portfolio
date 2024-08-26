import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DetailProjectComponent } from './detail-project/detail-project.component';
import { Projects } from '../../interfaces/projects.interface';

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [
    CommonModule,
    DetailProjectComponent
  ],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.scss'
})
export class FeaturedProjectsComponent {
  projects: Projects[] = [
    {
      id: '01',
      name: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      gitHub: '',
      liveTest: '',
      img: 'join',
      skills: [
        {
          name: 'CSS',
          img: 'css-blue',
        },
        {
          name: 'HTML',
          img: 'html-blue',
        },
        {
          name: 'Firebase',
          img: 'firebase-blue',
        },
        {
          name: 'Angular',
          img: 'angular-blue',
        },
        {
          name: 'TypeScript',
          img: 'typescript-blue',
        },
      ],
    },
    {
      id: '02',
      name: 'El Pollo Loco',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      gitHub: '',
      liveTest: '',
      img: 'pollo-loco',
      skills: [
        {
          name: 'CSS',
          img: 'css-blue',
        },
        {
          name: 'HTML',
          img: 'html-blue',
        },
        {
          name: 'Firebase',
          img: 'firebase-blue',
        },
        {
          name: 'Angular',
          img: 'angular-blue',
        },
        {
          name: 'TypeScript',
          img: 'typescript-blue',
        },
      ],
    },
    {
      id: '03',
      name: 'DABubble',
      description: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      gitHub: '',
      liveTest: '',
      img: 'da-bubble',
      skills: [
        {
          name: 'CSS',
          img: 'css-blue',
        },
        {
          name: 'HTML',
          img: 'html-blue',
        },
        {
          name: 'Firebase',
          img: 'firebase-blue',
        },
        {
          name: 'Angular',
          img: 'angular-blue',
        },
        {
          name: 'TypeScript',
          img: 'typescript-blue',
        },
      ],
    },
  ];
  hoverId = -1;
  clickId = -1;
  detailView = false;

  showArrow(index: number) {
    this.hoverId = index;
  }

  hideArrow() {
    this.hoverId = -1;
  }

  showDetail(index: number) {
    this.clickId = index;
    this.detailView = true;
  }
}
