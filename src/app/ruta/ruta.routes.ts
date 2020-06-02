import { Routes } from '@angular/router';
import { RutaListComponent } from './ruta-list/ruta-list.component';
import { RutaEditComponent } from './ruta-edit/ruta-edit.component';

export const RUTA_ROUTES: Routes = [
  {
    path: 'rutas',
    component: RutaListComponent
  },
  {
    path: 'rutas/:id',
    component: RutaEditComponent
  }
];
