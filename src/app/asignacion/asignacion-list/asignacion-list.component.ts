import { Component, OnInit } from '@angular/core';
import { AsignacionFilter } from '../asignacion-filter';
import { AsignacionService } from '../asignacion.service';
import { Asignacion } from '../asignacion';

@Component({
  selector: 'app-asignacion',
  templateUrl: 'Asignacion-list.component.html'
})
export class AsignacionListComponent implements OnInit {

  filter = new AsignacionFilter();
  selectedAsignacion: Asignacion;
  feedback: any = {};

  get asignacionList(): Asignacion[] {
    return this.asignacionService.asignacionList;
  }

  constructor(private asignacionService: AsignacionService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.asignacionService.load(this.filter);
  }

  select(selected: Asignacion): void {
    this.selectedAsignacion = selected;
  }

  delete(asignacion: Asignacion): void {
    if (confirm('Está seguro de inhabilitar la Asignacion ' + asignacion.id_asignacion_ruta)) {
      this.asignacionService.delete(asignacion).subscribe(() => {
          this.feedback = {type: 'success', message: 'La Asignacion ha sido deshabilitada'};
          setTimeout(() => {
            this.search();
          }, 1000);
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error al deshabilitar'};
        }
      );
    }
  }
}
