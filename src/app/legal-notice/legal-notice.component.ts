import { Component, inject } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { LanguageService } from '../shared/service/language.service';
import { HeaderComponent } from '../shared/header/header.component';
import { WindowService } from '../shared/service/window.service';

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
  languageService = inject(LanguageService);
  windowService = inject(WindowService)


  /**
   * Calls the LanguageService method to check the currently chosen language
   * during the construction of the component.
   */
  constructor() {
    this.languageService.checkChosedLang();
  }


  /**
   * Navigates back to the previous page in the browsing history.
   */
  goBack() {
    history.back();
  }
}
