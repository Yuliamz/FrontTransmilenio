import { Component, OnInit } from '@angular/core';
import { TroncalEstacionFilter } from '../troncalEstacion-filter';
import { TroncalEstacionService } from '../troncalEstacion.service';
import { TroncalEstacion } from '../troncalEstacion';

@Component({
  selector: 'app-troncalEstacion',
  templateUrl: 'TroncalEstacion-list.component.html'
})
export class TroncalEstacionListComponent implements OnInit {

  filter = new TroncalEstacionFilter();
  selectedTroncalEstacion: TroncalEstacion;
  feedback: any = {};

  get troncalEstacionList(): TroncalEstacion[] {
    return this.troncalEstacionService.troncalEstacionList;
  }

  constructor(private troncalEstacionService: TroncalEstacionService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.troncalEstacionService.load(this.filter);
  }

  select(selected: TroncalEstacion): void {
    this.selectedTroncalEstacion = selected;
  }

  delete(troncalEstacion: TroncalEstacion): void {
    if (confirm('Está seguro de inhabilitar la TroncalEstacion ' + troncalEstacion.id_troncal_estacion)) {
      this.troncalEstacionService.delete(troncalEstacion).subscribe(() => {
          this.feedback = {type: 'success', message: 'La TroncalEstacion ha sido deshabilitada'};
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
