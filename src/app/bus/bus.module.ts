import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BusListComponent } from './bus-list/bus-list.component';
import { BusEditComponent } from './bus-edit/bus-edit.component';
import { BusService } from './bus.service';
import { BUS_ROUTES } from './bus.routes';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ColorPickerModule,
    RouterModule.forChild(BUS_ROUTES)
  ],
  declarations: [
    BusListComponent,
    BusEditComponent
  ],
  providers: [BusService],
  exports: []
})
export class BusModule { }
