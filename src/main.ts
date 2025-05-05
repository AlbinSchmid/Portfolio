import { bootstrapApplication } from '@angular/platform-browser';
import * as Sentry from "@sentry/angular";
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

Sentry.init({
  dsn: "https://24286289d63df50e8fa11e391c287c68@o4509243315585024.ingest.de.sentry.io/4509271244013648",
  sendDefaultPii: true
});

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
