import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { LanguageService } from '../../shared/service/language.service';
import { WindowService } from '../../shared/service/window.service';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {
  windowService = inject(WindowService);
  languageService = inject(LanguageService)
  skillsIcons = [
    {
      'name': 'HTML',
      'img': 'html',
    },
    {
      'name': 'CSS',
      'img': 'css',
    },
    {
      'name': 'JavaScript',
      'img': 'javascript',
    },
    {
      'name': 'TypeScript',
      'img': 'typescript',
    },
    {
      'name': 'Angular',
      'img': 'angular',
    },
    {
      'name': 'Material Design',
      'img': 'material-design',
    },
    {
      'name': 'Firebase',
      'img': 'firebase',
    },
    {
      'name': 'GIT',
      'img': 'git',
    },
    {
      'name': 'Rest-Api',
      'img': 'api',
    },
    {
      'name': 'Scrum',
      'img': 'scrum',
    },
  ];
  hoveredOnGrowthImg = false;


  /**
   * Toggles the hover state of the "Growth mindset" skill element's 
   * "I'm interested in" icon and text.
   */
  showImg(){
    if (this.hoveredOnGrowthImg) {
      this.hoveredOnGrowthImg = false;
    } else if (!this.hoveredOnGrowthImg) {
      this.hoveredOnGrowthImg = true;
    }
  }


  /**
   * Calculates the offset for the project detail animation, 
   * depending on the index of the project and the window width
   * @param index - the index of the project
   * @returns the offset in pixels
   */
  checkOffset(index: number): number {
    if (window.innerWidth > 600) {
     return index <= 4 ? 400 : 300
    } else {
      return 0
    }
  }
}
