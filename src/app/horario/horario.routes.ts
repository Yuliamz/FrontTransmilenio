import { Routes } from '@angular/router';
import { HorarioListComponent } from './horario-list/horario-list.component';
import { HorarioEditComponent } from './horario-edit/horario-edit.component';

export const HORARIO_ROUTES: Routes = [
  {
    path: 'horarios',
    component: HorarioListComponent
  },
  {
    path: 'horarios/:id',
    component: HorarioEditComponent
  }
];
