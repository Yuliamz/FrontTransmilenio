import { Component, OnInit } from '@angular/core';
import { PortalFilter } from '../portal-filter';
import { PortalService } from '../portal.service';
import { Portal } from '../portal';

@Component({
  selector: 'app-portal',
  templateUrl: 'Portal-list.component.html'
})
export class PortalListComponent implements OnInit {

  filter = new PortalFilter();
  selectedPortal: Portal;
  feedback: any = {};

  get portalList(): Portal[] {
    return this.portalService.portalList;
  }

  constructor(private portalService: PortalService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.portalService.load(this.filter);
  }

  select(selected: Portal): void {
    this.selectedPortal = selected;
  }

  delete(portal: Portal): void {
    if (confirm('Está seguro de inhabilitar el Portal ' + portal.id_portal+' - '+portal.nombre_portal)) {
      this.portalService.delete(portal).subscribe(() => {
          this.feedback = {type: 'success', message: 'El Portal ha sido deshabilitada'};
          setTimeout(() => {
            this.search();
          }, 1000);
        },
        err => {
          this.feedback = {type: 'danger', message: 'Error al deshabilitar'};
        }
      );
    }
  }
}
