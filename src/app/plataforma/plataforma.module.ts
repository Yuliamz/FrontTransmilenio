import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PlataformaListComponent } from './plataforma-list/plataforma-list.component';
import { PlataformaEditComponent } from './plataforma-edit/plataforma-edit.component';
import { PlataformaService } from './plataforma.service';
import { PLATAFORMA_ROUTES } from './plataforma.routes';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ColorPickerModule,
    RouterModule.forChild(PLATAFORMA_ROUTES)
  ],
  declarations: [
    PlataformaListComponent,
    PlataformaEditComponent
  ],
  providers: [PlataformaService],
  exports: []
})
export class PlataformaModule { }
