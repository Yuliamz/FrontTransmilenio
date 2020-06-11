import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ViajeListComponent } from './viaje-list/viaje-list.component';
import { ViajeEditComponent } from './viaje-edit/viaje-edit.component';
import { ViajeService } from './viaje.service';
import { VIAJE_ROUTES } from './viaje.routes';
import { ColorPickerModule } from 'ngx-color-picker';
import { IgxDatePickerModule } from 'igniteui-angular';
import { IgxTimePickerModule } from 'igniteui-angular';
import * as moment from 'moment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ColorPickerModule,
    IgxDatePickerModule,
    IgxTimePickerModule,
    RouterModule.forChild(VIAJE_ROUTES)
  ],
  declarations: [
    ViajeListComponent,
    ViajeEditComponent
  ],
  providers: [ViajeService],
  exports: []
})
export class ViajeModule { }
