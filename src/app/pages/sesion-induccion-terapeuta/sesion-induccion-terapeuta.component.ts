import { Component } from '@angular/core';
import { CalendarioInduccionComponent } from '../../component/calendario-induccion/calendario-induccion.component';

@Component({
  selector: 'app-sesion-induccion-terapeuta',
  standalone: true,
  imports: [CalendarioInduccionComponent],
  templateUrl: './sesion-induccion-terapeuta.component.html',
  styleUrl: './sesion-induccion-terapeuta.component.css',
})
export class SesionInduccionTerapeutaComponent {}
