import { Component, OnInit } from '@angular/core';
import { EstacionFilter } from '../estacion-filter';
import { EstacionService } from '../estacion.service';
import { Estacion } from '../estacion';

@Component({
  selector: 'app-estacion',
  templateUrl: 'Estacion-list.component.html'
})
export class EstacionListComponent implements OnInit {

  filter = new EstacionFilter();
  selectedEstacion: Estacion;
  feedback: any = {};

  get estacionList(): Estacion[] {
    return this.estacionService.estacionList;
  }

  constructor(private estacionService: EstacionService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.estacionService.load(this.filter);
  }

  select(selected: Estacion): void {
    this.selectedEstacion = selected;
  }

  delete(estacion: Estacion): void {
    if (confirm('Está seguro de inhabilitar la Estacion ' + estacion.nombre_estacion)) {
      this.estacionService.delete(estacion).subscribe(() => {
          this.feedback = {type: 'success', message: 'La Estacion ha sido deshabilitada'};
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
