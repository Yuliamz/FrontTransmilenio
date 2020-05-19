import { Routes } from '@angular/router';
import { TipoListComponent } from './tipo-list/tipo-list.component';
import { TipoEditComponent } from './tipo-edit/tipo-edit.component';

export const TIPO_ROUTES: Routes = [
  {
    path: 'tipos',
    component: TipoListComponent
  },
  {
    path: 'tipos/:id',
    component: TipoEditComponent
  }
];
