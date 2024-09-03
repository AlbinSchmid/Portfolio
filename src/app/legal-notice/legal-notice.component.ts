import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { ContentLegalNoticeComponent } from './content-legal-notice/content-legal-notice.component';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [
    FooterComponent,
    ContentLegalNoticeComponent
  ],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

}
