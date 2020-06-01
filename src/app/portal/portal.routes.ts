import { Routes } from '@angular/router';
import { PortalListComponent } from './portal-list/portal-list.component';
import { PortalEditComponent } from './portal-edit/portal-edit.component';

export const PORTAL_ROUTES: Routes = [
  {
    path: 'portals',
    component: PortalListComponent
  },
  {
    path: 'portals/:id',
    component: PortalEditComponent
  }
];
