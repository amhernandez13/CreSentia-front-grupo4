import { Routes } from '@angular/router';
import { TerapeutaRegistroComponent } from './pages/terapeuta-registro/terapeuta-registro.component';
import { TerapeutaRegistro5Component } from './pages/terapeuta-registro-5/terapeuta-registro-5.component';
import { GeneralComponent } from './pages/general/general.component';
import { TextoComponent } from './pages/texto/texto.component';
import { Texto2Component } from './pages/texto2/texto2.component';
import { Texto3Component } from './pages/texto3/texto3.component';
import { Texto4Component } from './pages/texto4/texto4.component';
import { Texto5Component } from './pages/texto5/texto5.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { Formulario2Component } from './pages/formulario2/formulario2.component';
import { ConsentimientoComponent } from './pages/consentimiento/consentimiento.component';
import { CasaComponent } from './pages/casa/casa.component';
import { InformacionComponent } from './pages/Informacion/informacion.component';
import { PagoComponent } from './pages/pago/pago.component';
import { ProgramaComponent } from './pages/programa/programa.component';
import { SesionComponent } from './pages/sesion/sesion.component';


export const routes: Routes = [
  { path: 'terapeuta-registro', component: TerapeutaRegistroComponent },
  { path: 'terapeuta-registro-5', component: TerapeutaRegistro5Component },
  { path: 'texto', component:TextoComponent},
  { path: 'texto2', component:Texto2Component},
  { path: 'texto3', component:Texto3Component},
  { path: 'texto4', component:Texto4Component},
  { path: 'texto5', component:Texto5Component},
  { path: 'formulario', component:FormularioComponent},
  { path: 'formulario-2', component:Formulario2Component},
  { path: 'consentimiento', component:ConsentimientoComponent},
  { path: 'casa', component:CasaComponent},
  { path: 'informacion', component:InformacionComponent},
  { path: 'pago', component:PagoComponent},
  { path: 'programa', component:ProgramaComponent},
  { path: 'sesion', component:SesionComponent},
  { path: 'general', component: GeneralComponent}
];
