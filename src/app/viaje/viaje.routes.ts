import { Routes } from '@angular/router';
import { ViajeListComponent } from './viaje-list/viaje-list.component';
import { ViajeEditComponent } from './viaje-edit/viaje-edit.component';

export const VIAJE_ROUTES: Routes = [
  {
    path: 'viajes',
    component: ViajeListComponent
  },
  {
    path: 'viajes/:id',
    component: ViajeEditComponent
  }
];
