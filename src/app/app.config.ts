import { APP_INITIALIZER, ApplicationConfig, ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import * as Sentry from "@sentry/angular";

export const appConfig: ApplicationConfig = {
  providers: [{
    provide: ErrorHandler,
    useValue: Sentry.createErrorHandler(),
  },
  {
    provide: Sentry.TraceService,
    deps: [Router],
  },
  {
    provide: APP_INITIALIZER,
    useFactory: () => () => {},
    deps: [Sentry.TraceService],
    multi: true,
  },
  provideRouter(routes), provideHttpClient()]
};
