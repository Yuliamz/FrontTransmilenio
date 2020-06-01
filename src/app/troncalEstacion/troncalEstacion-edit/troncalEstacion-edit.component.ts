import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TroncalEstacionService } from '../troncalEstacion.service';
import { TroncalEstacion } from '../troncalEstacion';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {Troncal} from '../../troncal/troncal';
import {TroncalService} from '../../troncal/troncal.service';
import {Estacion} from '../../estacion/estacion';
import {EstacionService} from '../../estacion/estacion.service';

@Component({
  selector: 'app-troncalEstacion-edit',
  templateUrl: './troncalEstacion-edit.component.html'
})
export class TroncalEstacionEditComponent implements OnInit {

  id: string;
  troncalEstacion: TroncalEstacion;
  feedback: any = {};
  estados: any[] = [{id: "a", nombre: "Activo"}, {id: "n", nombre: "Inactivo"}];
  troncales: Troncal[];
  estaciones: Estacion[];
  selectedTroncal: Troncal;
  selectedEstacion: Estacion;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private troncalService: TroncalService,
    private estacionService: EstacionService,
    private troncalEstacionService: TroncalEstacionService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new TroncalEstacion()); }
          return this.troncalEstacionService.findById(id);
        })
      )
      .subscribe(troncalEstacion => {
          this.troncalEstacion = troncalEstacion;
          if (this.troncalEstacion.activo_troncal_estacion === undefined) {
            this.troncalEstacion.activo_troncal_estacion = 'a';
          }
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'danger', message: 'Error al cargar la información'};
        }
      );
        // Cargar Troncal
      this.troncalService.cargar().subscribe(data => {
        if (data.length === 0) {
          this.feedback = {type: 'warning', message: 'No existen Troncales'};
        } else {
          this.troncales = data;
          this.setTroncal();
        }
      }, error => {
        this.feedback = {type: 'danger', message: 'No existen Troncales'};
      });
      // Cargar Estacion
      this.estacionService.cargar().subscribe(data => {
        if (data.length === 0) {
          this.feedback = {type: 'warning', message: 'No existen Estaciones'};
        } else {
          this.estaciones = data;
          this.setEstacion();
        }
      }, error => {
        this.feedback = {type: 'danger', message: 'No existen Estaciones'};
      });
  }

  save() {
    this.troncalEstacion.id_estacion=this.selectedEstacion.id_estacion;
    this.troncalEstacion.id_troncal=this.selectedTroncal.id_troncal;
    this.troncalEstacionService.save(this.troncalEstacion).subscribe(
      troncalEstacion => {
        this.troncalEstacion = troncalEstacion;
        this.feedback = {type: 'success', message: 'Guardado correctamente con el ID ' + this.troncalEstacion.id_troncal_estacion};
        setTimeout(() => {
          this.router.navigate(['/troncalEstacions']);
        }, 1000);
      },
      error => {
        if (error.error.error) {
          this.feedback = {type: 'danger', message: error.error.error};
        } else {
          this.feedback = {type: 'danger', message: 'Error al guardar'};
        }
      }
    );
  }

  cancel() {
    this.router.navigate(['/troncalEstacions']);
  }

  setEstacion() {
    this.estaciones.forEach(estacion => {
      if (estacion.id_estacion == this.troncalEstacion.id_estacion) {
        this.selectedEstacion = estacion;
      }
    });
  }
  setTroncal() {
    this.troncales.forEach(troncal => {
      if (troncal.id_troncal == this.troncalEstacion.id_troncal) {
        this.selectedTroncal = troncal;
      }
    });
  }


}
