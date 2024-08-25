import { Routes } from '@angular/router';
import { TerapeutaRegistroComponent } from './pages/terapeuta-registro/terapeuta-registro.component';
import { TerapeutaRegistro5Component } from './pages/terapeuta-registro-5/terapeuta-registro-5.component';

export const routes: Routes = [
  { path: 'terapeuta-registro', component: TerapeutaRegistroComponent },
  { path: 'terapeuta-registro-5', component: TerapeutaRegistro5Component },
];
