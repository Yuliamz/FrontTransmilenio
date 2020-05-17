import { Routes } from '@angular/router';
import { TroncalListComponent } from './troncal-list/troncal-list.component';
import { TroncalEditComponent } from './troncal-edit/troncal-edit.component';

export const TRONCAL_ROUTES: Routes = [
  {
    path: 'troncals',
    component: TroncalListComponent
  },
  {
    path: 'troncals/:id',
    component: TroncalEditComponent
  }
];
