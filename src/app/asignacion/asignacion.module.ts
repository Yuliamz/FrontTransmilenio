import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AsignacionListComponent } from './asignacion-list/asignacion-list.component';
import { AsignacionEditComponent } from './asignacion-edit/asignacion-edit.component';
import { AsignacionService } from './asignacion.service';
import { ASIGNACION_ROUTES } from './asignacion.routes';
import { ColorPickerModule } from 'ngx-color-picker';
import { IgxDatePickerModule } from 'igniteui-angular';
import * as moment from 'moment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ColorPickerModule,
    IgxDatePickerModule,
    RouterModule.forChild(ASIGNACION_ROUTES)
  ],
  declarations: [
    AsignacionListComponent,
    AsignacionEditComponent
  ],
  providers: [AsignacionService],
  exports: []
})
export class AsignacionModule { }
