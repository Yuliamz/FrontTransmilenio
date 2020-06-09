import { Routes } from '@angular/router';
import { BusListComponent } from './bus-list/bus-list.component';
import { BusEditComponent } from './bus-edit/bus-edit.component';

export const BUS_ROUTES: Routes = [
  {
    path: 'buss',
    component: BusListComponent
  },
  {
    path: 'buss/:id',
    component: BusEditComponent
  }
];
