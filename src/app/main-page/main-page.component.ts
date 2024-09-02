import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { AotComponent } from './aot/aot.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { FeaturedProjectsComponent } from './featured-projects/featured-projects.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    AotComponent,
    AboutMeComponent,
    SkillSetComponent,
    FeaturedProjectsComponent,
    FeedbackComponent,
    ContactComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
