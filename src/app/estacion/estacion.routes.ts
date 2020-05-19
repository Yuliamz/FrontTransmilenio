import { Routes } from '@angular/router';
import { EstacionListComponent } from './estacion-list/estacion-list.component';
import { EstacionEditComponent } from './estacion-edit/estacion-edit.component';

export const ESTACION_ROUTES: Routes = [
  {
    path: 'estacions',
    component: EstacionListComponent
  },
  {
    path: 'estacions/:id',
    component: EstacionEditComponent
  }
];
