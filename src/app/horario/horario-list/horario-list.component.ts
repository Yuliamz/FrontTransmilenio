import { Component, OnInit } from '@angular/core';
import { HorarioFilter } from '../horario-filter';
import { HorarioService } from '../horario.service';
import { Horario } from '../horario';
import * as moment from 'moment';

@Component({
  selector: 'app-horario',
  templateUrl: 'horario-list.component.html'
})
export class HorarioListComponent implements OnInit {

  filter = new HorarioFilter();
  selectedHorario: Horario;
  feedback: any = {};

  get horarioList(): Horario[] {
    return this.horarioService.horarioList;
  }

  constructor(private horarioService: HorarioService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.horarioService.load(this.filter);
  }

  select(selected: Horario): void {
    this.selectedHorario = selected;
  }

  delete(horario: Horario): void {
    if (confirm('Está seguro de inhabilitar la Horario ' + horario.hora_fin)) {
      this.horarioService.delete(horario).subscribe(() => {
          this.feedback = {type: 'success', message: 'La horario ha sido deshabilitada'};
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
