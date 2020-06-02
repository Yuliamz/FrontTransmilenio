import { Routes } from '@angular/router';
import { PlataformaListComponent } from './plataforma-list/plataforma-list.component';
import { PlataformaEditComponent } from './plataforma-edit/plataforma-edit.component';

export const PLATAFORMA_ROUTES: Routes = [
  {
    path: 'plataformas',
    component: PlataformaListComponent
  },
  {
    path: 'plataformas/:id',
    component: PlataformaEditComponent
  }
];
