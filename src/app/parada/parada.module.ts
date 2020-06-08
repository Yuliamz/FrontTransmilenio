import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ParadaEditComponent } from './parada-edit/parada-edit.component';
import { ParadaService } from './parada.service';
import { PARADA_ROUTES } from './parada.routes';
import { ColorPickerModule } from 'ngx-color-picker';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ColorPickerModule,
    DragDropModule,
    RouterModule.forChild(PARADA_ROUTES)
  ],
  declarations: [
    ParadaEditComponent
  ],
  providers: [ParadaService],
  exports: []
})
export class ParadaModule { }
