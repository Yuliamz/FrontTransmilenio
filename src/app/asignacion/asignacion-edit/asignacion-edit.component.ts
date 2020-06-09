import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AsignacionService } from '../asignacion.service';
import { Asignacion } from '../asignacion';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {Bus} from '../../bus/bus';
import {BusService} from '../../bus/bus.service';
import {Ruta} from '../../ruta/ruta';
import {RutaService} from '../../ruta/ruta.service';
import {Horario} from '../../horario/horario';
import {HorarioService} from '../../horario/horario.service';

@Component({
  selector: 'app-asignacion-edit',
  templateUrl: './asignacion-edit.component.html'
})
export class AsignacionEditComponent implements OnInit {

  id: string;
  asignacion: Asignacion;
  feedback: any = {};
  estados: any[] = [{id: 'a', nombre: 'Activo'}, {id: 'n', nombre: 'Inactivo'}];
  buses: Bus[];
  rutaes: Ruta[];
  horarios: Horario[]
  selectedBus: Bus;
  selectedRuta: Ruta;
  selectedHorario: Horario;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private busService: BusService,
    private rutaService: RutaService,
    private horarioService: HorarioService,
    private asignacionService: AsignacionService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Asignacion()); }
          return this.asignacionService.findById(id);
        })
      )
      .subscribe(asignacion => {
          this.asignacion = asignacion;
          if (this.asignacion.activo_asignacion === undefined) {
            this.asignacion.activo_asignacion = 'a';
          }
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'danger', message: 'Error al cargar la información'};
        }
      );
        // Cargar Bus
      this.busService.cargar().subscribe(data => {
        if (data.length === 0) {
          this.feedback = {type: 'warning', message: 'No existen Buses'};
        } else {
          this.buses = data;
          this.setBus();
        }
      }, error => {
        this.feedback = {type: 'danger', message: 'No existen Buses'};
      });
      // Cargar Ruta
      this.rutaService.cargar().subscribe(data => {
        if (data.length === 0) {
          this.feedback = {type: 'warning', message: 'No existen Rutas'};
        } else {
          this.rutaes = data;
          this.setRuta();
        }
      }, error => {
        this.feedback = {type: 'danger', message: 'No existen Rutaes'};
      });
    // Cargar Horarios
    this.horarioService.cargar().subscribe(data => {
      if (data.length === 0) {
        this.feedback = {type: 'warning', message: 'No existen Rutas'};
      } else {
        this.horarios = data;
        this.setHorario();
      }
    }, error => {
      this.feedback = {type: 'danger', message: 'No existen Rutaes'};
    });
  }

  save() {
    if (this.selectedRuta) {
      this.asignacion.id_ruta = this.selectedRuta.id_ruta;
    }
    if (this.selectedBus) {
      this.asignacion.id_bus = this.selectedBus.id_bus;
    }
    if (this.selectedHorario) {
      this.asignacion.id_horario = this.selectedHorario.id_horario;
    }

    this.asignacionService.save(this.asignacion).subscribe(
      asignacion => {
        this.asignacion = asignacion;
        this.feedback = {type: 'success', message: 'Guardado correctamente con el ID ' + this.asignacion.id_asignacion_ruta};
        setTimeout(() => {
          this.router.navigate(['/asignacions']);
        }, 1000);
      },
      err => {
        let message = '';
        if(typeof err.error.errors === 'string')
          message = err.error.errors;
        else{
          for(let error in err.error.errors)
            message +=  err.error.errors[error]+',';
          message = message.substring(0, message.length-1);
        }
        this.feedback = {type: 'warning', message};
      }
    );
  }

  cancel() {
    this.router.navigate(['/asignacions']);
  }

  setRuta() {
    this.rutaes.forEach(ruta => {
      if (ruta.id_ruta == this.asignacion.id_ruta) {
        this.selectedRuta = ruta;
      }
    });
  }
  setBus() {
    this.buses.forEach(bus => {
      if (bus.id_bus == this.asignacion.id_bus) {
        this.selectedBus = bus;
      }
    });
  }
  setHorario() {
    this.horarios.forEach(horario => {
      if (horario.id_horario == this.asignacion.id_horario) {
        this.selectedHorario = horario;
      }
    });
  }


}
