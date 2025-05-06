import { Component, EventEmitter, inject, Input, Output, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { transition } from '@angular/animations';
import { LanguageService } from '../../../../shared/service/language.service';
import { FtProjectsService } from '../../../../shared/service/ft-projects.service';
import { WindowService } from '../../../../shared/service/window.service';

@Component({
  selector: 'app-detail-project',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './detail-project.component.html',
  styleUrl: './detail-project.component.scss'
})
export class DetailProjectComponent {
  projectService = inject(FtProjectsService);
  languageService = inject(LanguageService);

  @Input() projectIndex: number;
  @Input() detailView = true;
  @Output() closeDetail = new EventEmitter<boolean>();

  changeProjectAnimation = false;
  clickedOnDetailAlready = false;

  windowHeight = window.innerHeight;


  /**
   * Closes the detail view and emits an event to notify the parent component.
   */
  closeDetailView() {
    this.detailView = false;
    this.closeDetail.emit(this.detailView)
  }


  /**
   * Advances to the next project in the list, updating the project index.
   * Triggers an animation for the transition between projects.
   * Ensures the project index wraps around if it exceeds the total number of projects.
   */
  nextProject() {
    this.clickedOnDetailAlready = true;
    this.changeProjectAnimation = true;
    setTimeout(() => {
      this.projectIndex++;
      this.projectIndex = this.projectIndex % this.projectService.projects.length;
    }, 125);
    setTimeout(() => {
      this.changeProjectAnimation = false;
    }, 250);
  }
}
