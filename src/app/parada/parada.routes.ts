import { Routes } from '@angular/router';
import { ParadaEditComponent } from './parada-edit/parada-edit.component';

export const PARADA_ROUTES: Routes = [
  {
    path: 'paradas/:id',
    component: ParadaEditComponent
  }
];
