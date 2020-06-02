import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { VagonService } from '../vagon.service';
import { Vagon } from '../vagon';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {Plataforma} from '../../plataforma/plataforma';
import {PlataformaService} from '../../plataforma/plataforma.service';
import {TroncalEstacion} from '../../troncalEstacion/troncalEstacion';
import {TroncalEstacionService} from '../../troncalEstacion/troncalEstacion.service';

@Component({
  selector: 'app-vagon-edit',
  templateUrl: './vagon-edit.component.html'
})
export class VagonEditComponent implements OnInit {

  id: string;
  vagon: Vagon;
  feedback: any = {};
  estados: any[] = [{id: "a", nombre: "Activo"}, {id: "n", nombre: "Inactivo"}];
  plataformaes: Plataforma[];
  troncalEstaciones: TroncalEstacion[];
  selectedPlataforma: Plataforma;
  selectedEstacion: TroncalEstacion;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private plataformaService: PlataformaService,
    private troncalEstacionService: TroncalEstacionService,
    private vagonService: VagonService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Vagon()); }
          return this.vagonService.findById(id);
        })
      )
      .subscribe(vagon => {
          this.vagon = vagon;
          if (this.vagon.activo_vagon === undefined) {
            this.vagon.activo_vagon = 'a';
          }
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'danger', message: 'Error al cargar la información'};
        }
      );
        // Cargar Plataforma
      this.plataformaService.cargar().subscribe(data => {
        if (data.length === 0) {
          this.feedback = {type: 'warning', message: 'No existen Plataformas'};
        } else {
          this.plataformaes = data;
          this.setPlataforma();
        }
      }, error => {
        this.feedback = {type: 'danger', message: 'No existen Plataformas'};
      });
      // Cargar Estacion
      this.troncalEstacionService.cargar().subscribe(data => {
        if (data.length === 0) {
          this.feedback = {type: 'warning', message: 'No existen Estaciones'};
        } else {
          this.troncalEstaciones = data;
          this.setEstacion();
        }
      }, error => {
        this.feedback = {type: 'danger', message: 'No existen Estaciones'};
      });
  }

  save() {
    if (this.selectedEstacion) {
      this.vagon.id_troncal_estacion = this.selectedEstacion.id_troncal_estacion;
    }
    if (this.selectedPlataforma) {
      this.vagon.id_plataforma = this.selectedPlataforma.id_plataforma;
    }
    this.vagonService.save(this.vagon).subscribe(
      vagon => {
        this.vagon = vagon;
        this.feedback = {type: 'success', message: 'Guardado correctamente con el ID ' + this.vagon.id_vagon};
        setTimeout(() => {
          this.router.navigate(['/vagons']);
        }, 1000);
      },
      error => {
        console.log(JSON.stringify(error));
        if (error.error.errors) {
          this.feedback = {type: 'danger', message: error.error.errors};
        } else {
          this.feedback = {type: 'danger', message: 'Error al guardar'};
        }
      }
    );
  }

  cancel() {
    this.router.navigate(['/vagons']);
  }

  setEstacion() {
    this.troncalEstaciones.forEach(troncalEstacion => {
      if (troncalEstacion.id_troncal_estacion == this.vagon.id_troncal_estacion) {
        this.selectedEstacion = troncalEstacion;
      }
    });
  }
  setPlataforma() {
    this.plataformaes.forEach(plataforma => {
      if (plataforma.id_plataforma == this.vagon.id_plataforma) {
        this.selectedPlataforma = plataforma;
      }
    });
  }


}
