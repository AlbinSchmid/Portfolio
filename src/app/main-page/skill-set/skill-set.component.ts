import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { LanguageService } from '../../shared/service/language.service';

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
  skillAnimation = false;

  
  constructor(public languageService: LanguageService) {}


  /**
   * show the hidden img
   */
  showImg(){
    if (this.hoveredOnGrowthImg) {
      this.hoveredOnGrowthImg = false;
    } else if (!this.hoveredOnGrowthImg) {
      this.hoveredOnGrowthImg = true;
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollPosition = window.scrollY;
    console.log(scrollPosition);

    

    if (scrollPosition > 1300 && !this.skillAnimation) {
      this.skillAnimation = true;
    }
  }
}
