import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '../../shared/service/language.service';
import { ProjectComponent } from './project/project.component';
import { FtProjectsService } from '../../shared/service/ft-projects.service';

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [
    CommonModule,
    ProjectComponent,
  ],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.scss'
})
export class FeaturedProjectsComponent {
  projectService = inject(FtProjectsService);
  languageService = inject(LanguageService);
}
