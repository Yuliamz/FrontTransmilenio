import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ViajeService } from '../viaje.service';
import { Viaje } from '../viaje';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {Asignacion} from '../../asignacion/asignacion';
import {AsignacionService} from '../../asignacion/asignacion.service';
import {Estacion} from '../../estacion/estacion';
import {EstacionService} from '../../estacion/estacion.service';
import * as moment from 'moment';

@Component({
  selector: 'app-viaje-edit',
  templateUrl: './viaje-edit.component.html'
})
export class ViajeEditComponent implements OnInit {

  id: string;
  viaje: Viaje;
  feedback: any = {};
  estados: any[] = [{id: 'a', nombre: 'Activo'}, {id: 'n', nombre: 'Inactivo'}];
  asignaciones: Asignacion[];
  selectedAsignacion: Asignacion;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private asignacionService: AsignacionService,
    private viajeService: ViajeService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') {
           const entity = new Viaje();
           entity.fecha_inicio = new Date();
           entity.fecha_fin = new Date();
           return of(entity); }
          return this.viajeService.findById(id);
        })
      )
      .subscribe(viaje => {
          this.viaje = viaje;
          if (this.viaje.id_viaje !== undefined) {
            this.viaje.fecha_inicio = moment(this.viaje.fecha_inicio_viaje, 'YYYY-MM-DD HH:mm:ss').toDate();
            this.viaje.fecha_fin = moment(this.viaje.fecha_fin_viaje, 'YYYY-MM-DD HH:mm:ss').toDate();
          }
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'danger', message: 'Error al cargar la información'};
        }
      );
        // Cargar Asignacion
      this.asignacionService.cargar().subscribe(data => {
        if (data.length === 0) {
          this.feedback = {type: 'warning', message: 'No existen Asignaciones'};
        } else {
          this.asignaciones = data;
          this.setAsignacion();
        }
      }, error => {
        this.feedback = {type: 'danger', message: 'No existen Asignaciones'};
      });
  }

  save() {
    this.viaje.id_asignacion_ruta = this.selectedAsignacion.id_asignacion_ruta;
    this.viajeService.save(this.viaje).subscribe(
      viaje => {
        this.viaje = viaje;
        this.feedback = {type: 'success', message: 'Guardado correctamente con el ID ' + this.viaje.id_viaje};
        setTimeout(() => {
          this.router.navigate(['/viajes']);
        }, 1000);
      },
      err => {
        let message = '';
        if (typeof err.error.errors === 'string') {
          message = err.error.errors;
        } else {
          for (const error in err.error.errors) {
            message +=  err.error.errors[error] + ',';
          }
          message = message.substring(0, message.length - 1);
        }
        this.feedback = {type: 'warning', message};
      }
    );
  }

  cancel() {
    this.router.navigate(['/viajes']);
  }

  setAsignacion() {
    this.asignaciones.forEach(asignacion => {
      if (asignacion.id_asignacion_ruta == this.viaje.id_asignacion_ruta) {
        this.selectedAsignacion = asignacion;
      }
    });
  }


}
