import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EstacionListComponent } from './estacion-list/estacion-list.component';
import { EstacionEditComponent } from './estacion-edit/estacion-edit.component';
import { EstacionService } from './estacion.service';
import { ESTACION_ROUTES } from './estacion.routes';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ColorPickerModule,
    RouterModule.forChild(ESTACION_ROUTES)
  ],
  declarations: [
    EstacionListComponent,
    EstacionEditComponent
  ],
  providers: [EstacionService],
  exports: []
})
export class EstacionModule { }
