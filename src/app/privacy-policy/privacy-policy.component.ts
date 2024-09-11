import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [
    FooterComponent,
  ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  /**
   * go back to last page
   */
  goBack() {
    history.back();
  }
}
