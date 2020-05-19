import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TipoListComponent } from './tipo-list/tipo-list.component';
import { TipoEditComponent } from './tipo-edit/tipo-edit.component';
import { TipoService } from './tipo.service';
import { TIPO_ROUTES } from './tipo.routes';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ColorPickerModule,
    RouterModule.forChild(TIPO_ROUTES)
  ],
  declarations: [
    TipoListComponent,
    TipoEditComponent
  ],
  providers: [TipoService],
  exports: []
})
export class TipoModule { }
