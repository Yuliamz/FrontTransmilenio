import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TroncalEstacionListComponent } from './troncalEstacion-list/troncalEstacion-list.component';
import { TroncalEstacionEditComponent } from './troncalEstacion-edit/troncalEstacion-edit.component';
import { TroncalEstacionService } from './troncalEstacion.service';
import { TRONCALESTACION_ROUTES } from './troncalEstacion.routes';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ColorPickerModule,
    RouterModule.forChild(TRONCALESTACION_ROUTES)
  ],
  declarations: [
    TroncalEstacionListComponent,
    TroncalEstacionEditComponent
  ],
  providers: [TroncalEstacionService],
  exports: []
})
export class TroncalEstacionModule { }
