import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { LanguageService } from '../shared/service/language.service';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [
    FooterComponent,
  ],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  constructor(public languageService: LanguageService) {
    languageService.checkChosedLang();
  }

  goBack() {
    history.back();
  }
}
