import { Routes } from '@angular/router';
import { TerapeutaRegistro1Component } from './pages/terapeuta-registro-1/terapeuta-registro-1.component';
import { TerapeutaRegistro2Component } from './pages/terapeuta-registro-2/terapeuta-registro-2.component';
import { TerapeutaRegistro3Component } from './pages/terapeuta-registro-3/terapeuta-registro-3.component';
import { TerapeutaRegistro4Component } from './pages/terapeuta-registro-4/terapeuta-registro-4.component';

export const routes: Routes = [
    {path:"terapeuta-registro-1", component: TerapeutaRegistro1Component},
    {path:"terapeuta-registro-2", component: TerapeutaRegistro2Component},
    {path:"terapeuta-registro-3", component: TerapeutaRegistro3Component},
    {path:"terapeuta-registro-4", component: TerapeutaRegistro4Component}
];
