import { Component } from '@angular/core';

@Component({
  selector: 'app-content-legal-notice',
  standalone: true,
  imports: [],
  templateUrl: './content-legal-notice.component.html',
  styleUrl: './content-legal-notice.component.scss'
})
export class ContentLegalNoticeComponent {
  goBack() {
    history.back();
  }
}
