import { Routes } from '@angular/router';
import { AsignacionListComponent } from './asignacion-list/asignacion-list.component';
import { AsignacionEditComponent } from './asignacion-edit/asignacion-edit.component';

export const ASIGNACION_ROUTES: Routes = [
  {
    path: 'asignacions',
    component: AsignacionListComponent
  },
  {
    path: 'asignacions/:id',
    component: AsignacionEditComponent
  }
];
