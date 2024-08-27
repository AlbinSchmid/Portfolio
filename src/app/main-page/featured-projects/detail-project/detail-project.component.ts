import { Component, EventEmitter, inject, Input, Output, output } from '@angular/core';
import { Projectssss } from '../../../interfaces/projects.interface';
import { CommonModule } from '@angular/common';
import { transition } from '@angular/animations';

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
    },
  ];
  @Input() currentId = 0;
  @Input() detailView = true;
  @Output() closeDetail = new EventEmitter<boolean>();

  closeDetailView() {
    this.detailView = false;
    this.closeDetail.emit(this.detailView)
  }

  nextProject(){
    this.currentId++;
    this.currentId = this.currentId % this.projects.length;
    
  }

}
