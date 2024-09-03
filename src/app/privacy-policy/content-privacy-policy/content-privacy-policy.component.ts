import { Component } from '@angular/core';

@Component({
  selector: 'app-content-privacy-policy',
  standalone: true,
  imports: [],
  templateUrl: './content-privacy-policy.component.html',
  styleUrl: './content-privacy-policy.component.scss'
})
export class ContentPrivacyPolicyComponent {
  goBack() {
    history.back();
  }
}
