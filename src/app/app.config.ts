import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LucideAngularModule, PhoneCall } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideClientHydration(),
    provideAnimationsAsync(),
    importProvidersFrom(LucideAngularModule.pick({PhoneCall})), provideAnimationsAsync()
  ]
};
