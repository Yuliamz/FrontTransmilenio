import { Component, OnInit } from '@angular/core';
import { ViajeFilter } from '../viaje-filter';
import { ViajeService } from '../viaje.service';
import { Viaje } from '../viaje';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-viaje',
  templateUrl: 'Viaje-list.component.html'
})
export class ViajeListComponent implements OnInit {

  filter = new ViajeFilter();
  selectedViaje: Viaje;
  feedback: any = {};

  get viajeList(): Viaje[] {
    return this.viajeService.viajeList;
  }

  constructor(private viajeService: ViajeService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.viajeService.load(this.filter);
  }

  select(selected: Viaje): void {
    this.selectedViaje = selected;
  }
  descargar() {
    saveAs('http://localhost:8000/api/download/Travel', 'Viajes.json');
  }
  delete(viaje: Viaje): void {
    if (confirm('Está seguro de inhabilitar el Viaje ' + viaje.id_viaje)) {
      this.viajeService.delete(viaje).subscribe(() => {
          this.feedback = {type: 'success', message: 'El Viaje ha sido deshabilitada'};
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
