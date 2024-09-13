import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { LanguageService } from '../shared/service/language.service';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  constructor(public languageService: LanguageService) {
    languageService.checkChosedLang();
  }

  /**
   * go back to last page
   */
  goBack() {
    history.back();
  }
}
