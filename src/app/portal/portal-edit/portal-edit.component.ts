import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PortalService } from '../portal.service';
import { Portal } from '../portal';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {Troncal} from '../../troncal/troncal';
import {TroncalService} from '../../troncal/troncal.service';
import {Estacion} from '../../estacion/estacion';
import {EstacionService} from '../../estacion/estacion.service';

@Component({
  selector: 'app-portal-edit',
  templateUrl: './portal-edit.component.html'
})
export class PortalEditComponent implements OnInit {

  id: string;
  portal: Portal;
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
    private portalService: PortalService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Portal()); }
          return this.portalService.findById(id);
        })
      )
      .subscribe(portal => {
          this.portal = portal;
          if (this.portal.activo_portal === undefined) {
            this.portal.activo_portal = 'a';
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
  }

  save() {
    this.portal.id_troncal=this.selectedTroncal.id_troncal;
    this.portalService.save(this.portal).subscribe(
      portal => {
        this.portal = portal;
        this.feedback = {type: 'success', message: 'Guardado correctamente con el ID ' + this.portal.id_portal};
        setTimeout(() => {
          this.router.navigate(['/portals']);
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
    this.router.navigate(['/portals']);
  }

  setTroncal() {
    this.troncales.forEach(troncal => {
      if (troncal.id_troncal == this.portal.id_troncal) {
        this.selectedTroncal = troncal;
      }
    });
  }


}
