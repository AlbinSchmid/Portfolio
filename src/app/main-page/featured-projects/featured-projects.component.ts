import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DetailProjectComponent } from './detail-project/detail-project.component';
import { LanguageService } from '../../shared/service/language.service';

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
  projects = [
    {
      id: '01',
      name: 'Join',
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
      gitHub: 'https://github.com/AlbinSchmid/El-Pollo-Loco',
      liveTest: '',
      img: 'pollo-loco',
      skills: [
        {
          name: 'JavaScript',
          img: 'javascript-blue',
        },
        {
          name: 'CSS',
          img: 'css-blue',
        },
        {
          name: 'HTML',
          img: 'html-blue',
        },
      ],
    },
    {
      id: '03',
      name: 'DABubble',
      gitHub: '',
      liveTest: '',
      img: 'da-bubble',
      skills: [
        {
          name: 'JavaScript',
          img: 'javascript-blue',
        },
        {
          name: 'CSS',
          img: 'css-blue',
        },
        {
          name: 'HTML',
          img: 'html-blue',
        },
      ],
    },
  ];
  hoverId = -1;
  clickId = -1;
  detailView = false;

  
  constructor(public languageService: LanguageService) {}


  /**
   * show arrow
   * @param index - which arrow should show
   */
  showArrow(index: number) {
    this.hoverId = index;
  }


  /**
   * hide arrow
   */
  hideArrow() {
    this.hoverId = -1;
  }


  /**
   * open the detail view of the project
   * @param index - on which project should open the detail.
   */
  showDetail(index: number) {
    this.clickId = index;
    this.detailView = true;
  }


  /**
   * close the detail view
   * @param closeDetail - get this from child 
   */
  closeDetail(closeDetail: boolean) {
    this.detailView = closeDetail;
  }
}
