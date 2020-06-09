import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { BusService } from '../bus.service';
import { Bus } from '../bus';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {Tipo} from '../../tipo/tipo';
import {TipoService} from '../../tipo/tipo.service';
import {Estacion} from '../../estacion/estacion';
import {EstacionService} from '../../estacion/estacion.service';

@Component({
  selector: 'app-bus-edit',
  templateUrl: './bus-edit.component.html'
})
export class BusEditComponent implements OnInit {

  id: string;
  bus: Bus;
  feedback: any = {};
  estados: any[] = [{id: 'a', nombre: 'Activo'}, {id: 'n', nombre: 'Inactivo'}];
  tipos: Tipo[];
  estaciones: Estacion[];
  selectedTipo: Tipo;
  selectedEstacion: Estacion;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tipoService: TipoService,
    private estacionService: EstacionService,
    private busService: BusService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Bus()); }
          return this.busService.findById(id);
        })
      )
      .subscribe(bus => {
          this.bus = bus;
          if (this.bus.activo_bus === undefined) {
            this.bus.activo_bus = 'a';
          }
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'danger', message: 'Error al cargar la información'};
        }
      );
        // Cargar Tipo
      this.tipoService.cargar().subscribe(data => {
        if (data.length === 0) {
          this.feedback = {type: 'warning', message: 'No existen tipos'};
        } else {
          this.tipos = data;
          this.setTipo();
        }
      }, error => {
        this.feedback = {type: 'danger', message: 'No existen tipos'};
      });
  }

  save() {
    this.bus.id_tipo_bus = this.selectedTipo.id_tipo_bus;
    this.busService.save(this.bus).subscribe(
      bus => {
        this.bus = bus;
        this.feedback = {type: 'success', message: 'Guardado correctamente con el ID ' + this.bus.id_bus};
        setTimeout(() => {
          this.router.navigate(['/buss']);
        }, 1000);
      },
      error => {
        if (error.error.errors) {
          this.feedback = {type: 'danger', message: error.error.errors};
        } else {
          this.feedback = {type: 'danger', message: 'Error al guardar'};
        }
      }
    );
  }

  cancel() {
    this.router.navigate(['/buss']);
  }

  setTipo() {
    this.tipos.forEach(tipo => {
      if (tipo.id_tipo_bus == this.bus.id_tipo_bus) {
        this.selectedTipo = tipo;
      }
    });
  }


}
