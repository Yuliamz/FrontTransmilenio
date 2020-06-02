import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VagonListComponent } from './vagon-list/vagon-list.component';
import { VagonEditComponent } from './vagon-edit/vagon-edit.component';
import { VagonService } from './vagon.service';
import { VAGON_ROUTES } from './vagon.routes';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ColorPickerModule,
    RouterModule.forChild(VAGON_ROUTES)
  ],
  declarations: [
    VagonListComponent,
    VagonEditComponent
  ],
  providers: [VagonService],
  exports: []
})
export class VagonModule { }
