import { Component, OnInit } from '@angular/core';
import { TipoFilter } from '../tipo-filter';
import { TipoService } from '../tipo.service';
import { Tipo } from '../tipo';

@Component({
  selector: 'app-tipo',
  templateUrl: 'tipo-list.component.html'
})
export class TipoListComponent implements OnInit {

  filter = new TipoFilter();
  selectedTipo: Tipo;
  feedback: any = {};

  get tipoList(): Tipo[] {
    return this.tipoService.tipoList;
  }

  constructor(private tipoService: TipoService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.tipoService.load(this.filter);
  }

  select(selected: Tipo): void {
    this.selectedTipo = selected;
  }

  delete(tipo: Tipo): void {
    if (confirm('Está seguro de inhabilitar el Tipo de bus ' + tipo.id_tipo_bus)) {
      this.tipoService.delete(tipo).subscribe(() => {
          this.feedback = {type: 'success', message: 'EL tipo de bus ha sido deshabilitada'};
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
