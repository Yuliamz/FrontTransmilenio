import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PortalListComponent } from './portal-list/portal-list.component';
import { PortalEditComponent } from './portal-edit/portal-edit.component';
import { PortalService } from './portal.service';
import { PORTAL_ROUTES } from './portal.routes';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ColorPickerModule,
    RouterModule.forChild(PORTAL_ROUTES)
  ],
  declarations: [
    PortalListComponent,
    PortalEditComponent
  ],
  providers: [PortalService],
  exports: []
})
export class PortalModule { }
