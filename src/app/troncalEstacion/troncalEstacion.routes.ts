import { Routes } from '@angular/router';
import { TroncalEstacionListComponent } from './troncalEstacion-list/troncalEstacion-list.component';
import { TroncalEstacionEditComponent } from './troncalEstacion-edit/troncalEstacion-edit.component';

export const TRONCALESTACION_ROUTES: Routes = [
  {
    path: 'troncalEstacions',
    component: TroncalEstacionListComponent
  },
  {
    path: 'troncalEstacions/:id',
    component: TroncalEstacionEditComponent
  }
];
