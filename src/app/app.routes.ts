import { Routes } from '@angular/router';
import { TerapeutaRegistroComponent } from './pages/terapeuta-registro/terapeuta-registro.component';
import { TerapeutaRegistro5Component } from './pages/terapeuta-registro-5/terapeuta-registro-5.component';
import { CalendarioInduccionComponent } from './component/calendario-induccion/calendario-induccion.component';
import { SesionInduccionTerapeutaComponent } from './pages/sesion-induccion-terapeuta/sesion-induccion-terapeuta.component';

export const routes: Routes = [
  { path: 'terapeuta-registro', component: TerapeutaRegistroComponent },
  { path: 'terapeuta-registro-5', component: TerapeutaRegistro5Component },
  { path: 'calendario-induccion', component: CalendarioInduccionComponent },
  {
    path: 'sesion-induccion-terapeuta',
    component: SesionInduccionTerapeutaComponent,
  },
];
