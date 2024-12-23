import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { DetailProjectComponent } from './detail-project/detail-project.component';
import { WindowServiceService } from '../../../shared/service/window.service';
import { FtProjectsService } from '../../../shared/service/ft-projects.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    DetailProjectComponent,
    CommonModule,
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
windowService = inject(WindowServiceService);
projectService = inject(FtProjectsService);
@Input() projectIndex: number;
showProjectDetail = false;


/**
 * Calculates the offset for the project detail animation, 
 * depending on the index of the project and the window width
 * @returns the offset in pixels
 */
checkOffset(): number {
  if (this.projectIndex == 0) {
    return this.windowService.windowWidth <= 870 ? 350 : 400;
  } else if (this.projectIndex == 1) {
    return this.windowService.windowWidth <= 870 ? 250 : 300;
  } else {
    return this.windowService.windowWidth <= 870 ? 150 : 200;
  }
}


/**
 * close the detail view of the project
 * @param closeDetail - boolean to switch between detail view and normal view
 */
closeDetail(closeDetail: boolean) {
  this.showProjectDetail = closeDetail;
}
}
