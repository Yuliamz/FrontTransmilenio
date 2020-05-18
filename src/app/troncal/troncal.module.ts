import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TroncalListComponent } from './troncal-list/troncal-list.component';
import { TroncalEditComponent } from './troncal-edit/troncal-edit.component';
import { TroncalService } from './troncal.service';
import { TRONCAL_ROUTES } from './troncal.routes';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ColorPickerModule,
    RouterModule.forChild(TRONCAL_ROUTES)
  ],
  declarations: [
    TroncalListComponent,
    TroncalEditComponent
  ],
  providers: [TroncalService],
  exports: []
})
export class TroncalModule { }
