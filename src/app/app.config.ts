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
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    BrowserModule, // No es necesario si no tienes módulos tradicionales, pero lo mantendré aquí por ahora
    BrowserAnimationsModule, // Lo mismo que BrowserModule
    provideAnimations(),
    provideHttpClient(), provideAnimationsAsync(), // Reemplaza HttpClientModule con provideHttpClient
  ],
};
