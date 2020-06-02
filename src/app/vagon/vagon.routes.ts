import { Routes } from '@angular/router';
import { VagonListComponent } from './vagon-list/vagon-list.component';
import { VagonEditComponent } from './vagon-edit/vagon-edit.component';

export const VAGON_ROUTES: Routes = [
  {
    path: 'vagons',
    component: VagonListComponent
  },
  {
    path: 'vagons/:id',
    component: VagonEditComponent
  }
];
