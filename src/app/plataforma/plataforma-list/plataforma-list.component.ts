import { Component, OnInit } from '@angular/core';
import { PlataformaFilter } from '../plataforma-filter';
import { PlataformaService } from '../plataforma.service';
import { Plataforma } from '../plataforma';

@Component({
  selector: 'app-plataforma',
  templateUrl: 'Plataforma-list.component.html'
})
export class PlataformaListComponent implements OnInit {

  filter = new PlataformaFilter();
  selectedPlataforma: Plataforma;
  feedback: any = {};

  get plataformaList(): Plataforma[] {
    return this.plataformaService.plataformaList;
  }

  constructor(private plataformaService: PlataformaService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.plataformaService.load(this.filter);
  }

  select(selected: Plataforma): void {
    this.selectedPlataforma = selected;
  }

  delete(plataforma: Plataforma): void {
    if (confirm('Está seguro de inhabilitar la Plataforma número ' + plataforma.numero_plataforma)) {
      this.plataformaService.delete(plataforma).subscribe(() => {
          this.feedback = {type: 'success', message: 'La Plataforma ha sido deshabilitada'};
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
