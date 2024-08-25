import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    BrowserModule, // No es necesario si no tienes módulos tradicionales, pero lo mantendré aquí por ahora
    BrowserAnimationsModule, // Lo mismo que BrowserModule
    provideAnimations(),
    provideHttpClient(), // Reemplaza HttpClientModule con provideHttpClient
  ],
};
