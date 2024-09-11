import { Component, EventEmitter, inject, Input, Output, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { transition } from '@angular/animations';
import { LanguageService } from '../../../shared/service/language.service';

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
  @Input() projects = [
    {
      id: '',
      name: '',
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
    },
  ];
  @Input() currentId = 0;
  @Input() detailView = true;
  @Output() closeDetail = new EventEmitter<boolean>();

  
  constructor(public languageService: LanguageService) {}


  /**
   * change the variable and send it to the parent
   */
  closeDetailView() {
    this.detailView = false;
    this.closeDetail.emit(this.detailView)
  }


  /**
   * next project should show
   */
  nextProject(){
    this.currentId++;
    this.currentId = this.currentId % this.projects.length;
  }
}
