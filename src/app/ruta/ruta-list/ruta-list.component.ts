import { Component, OnInit } from '@angular/core';
import { RutaFilter } from '../ruta-filter';
import { RutaService } from '../ruta.service';
import { Ruta } from '../ruta';

@Component({
  selector: 'app-ruta',
  templateUrl: 'Ruta-list.component.html'
})
export class RutaListComponent implements OnInit {

  filter = new RutaFilter();
  selectedRuta: Ruta;
  feedback: any = {};

  get rutaList(): Ruta[] {
    return this.rutaService.rutaList;
  }

  constructor(private rutaService: RutaService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.rutaService.load(this.filter);
  }

  select(selected: Ruta): void {
    this.selectedRuta = selected;
  }

  delete(ruta: Ruta): void {
    if (confirm('Está seguro de inhabilitar la Ruta ' + ruta.codigo_ruta)) {
      this.rutaService.delete(ruta).subscribe(() => {
          this.feedback = {type: 'success', message: 'La Ruta ha sido deshabilitada'};
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
