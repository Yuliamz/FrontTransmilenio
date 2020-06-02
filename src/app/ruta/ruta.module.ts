import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RutaListComponent } from './ruta-list/ruta-list.component';
import { RutaEditComponent } from './ruta-edit/ruta-edit.component';
import { RutaService } from './ruta.service';
import { RUTA_ROUTES } from './ruta.routes';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ColorPickerModule,
    RouterModule.forChild(RUTA_ROUTES)
  ],
  declarations: [
    RutaListComponent,
    RutaEditComponent
  ],
  providers: [RutaService],
  exports: []
})
export class RutaModule { }
