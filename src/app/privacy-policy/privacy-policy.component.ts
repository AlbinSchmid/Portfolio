import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { ContentPrivacyPolicyComponent } from './content-privacy-policy/content-privacy-policy.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [
    FooterComponent,
    ContentPrivacyPolicyComponent
  ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
