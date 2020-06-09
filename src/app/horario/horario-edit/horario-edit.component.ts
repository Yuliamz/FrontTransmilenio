import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HorarioService } from '../horario.service';
import { Horario } from '../horario';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as moment from 'moment';


@Component({
  selector: 'app-horario-edit',
  templateUrl: './horario-edit.component.html'
})
export class HorarioEditComponent implements OnInit {

  id: string;
  horario: Horario;
  feedback: any = {};
  estados: any[] = [{id: 'a', nombre: 'Activo'}, {id: 'n', nombre: 'Inactivo'}];
  dias: any[] = [{id: 'Lunes', nombre: 'Lunes'},
    {id: 'Martes', nombre: 'Martes'},
    {id: 'Miércoles', nombre: 'Miércoles'},
    {id: 'Jueves', nombre: 'Jueves'},
    {id: 'Viernes', nombre: 'Viernes'},
    {id: 'Sábado', nombre: 'Sábado'},
    {id: 'Domingo', nombre: 'Domingo'}
    ];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private horarioService: HorarioService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Horario()); }
          return this.horarioService.findById(id);
        })
      )
      .subscribe(horario => {
          this.horario = horario;
          if (this.horario.activo_horario === undefined) {
            this.horario.activo_horario = 'a';
          } else {
            this.horario.hora_inicio = moment(this.horario.horario_inicio, 'YYYY-MM-DD HH:mm:ss').toDate();
            this.horario.hora_fin = moment(this.horario.horario_fin, 'YYYY-MM-DD HH:mm:ss').toDate();
          }
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error al cargar la información'};
        }
      );
  }

  save() {
    this.horarioService.save(this.horario).subscribe(
      horario => {
        this.horario = horario;
        this.feedback = {type: 'success', message: 'Guardado correctamente con el ID ' + this.horario.id_horario};
        setTimeout(() => {
          this.router.navigate(['/horarios']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: 'Error al guardar'};
      }
    );
  }

  cancel() {
    this.router.navigate(['/horarios']);
  }
}
