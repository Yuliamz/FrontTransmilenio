import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HorarioListComponent } from './horario-list/horario-list.component';
import { HorarioEditComponent } from './horario-edit/horario-edit.component';
import { HorarioService } from './horario.service';
import { HORARIO_ROUTES } from './horario.routes';
import { ColorPickerModule } from 'ngx-color-picker';
import { IgxTimePickerModule } from 'igniteui-angular';
import * as moment from 'moment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ColorPickerModule,
    IgxTimePickerModule,
    RouterModule.forChild(HORARIO_ROUTES)
  ],
  declarations: [
    HorarioListComponent,
    HorarioEditComponent
  ],
  providers: [HorarioService],
  exports: []
})
export class HorarioModule { }
