import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PlataformaService } from '../plataforma.service';
import { Plataforma } from '../plataforma';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {Portal} from '../../portal/portal';
import {PortalService} from '../../portal/portal.service';
import {Estacion} from '../../estacion/estacion';
import {EstacionService} from '../../estacion/estacion.service';

@Component({
  selector: 'app-plataforma-edit',
  templateUrl: './plataforma-edit.component.html'
})
export class PlataformaEditComponent implements OnInit {

  id: string;
  plataforma: Plataforma;
  feedback: any = {};
  estados: any[] = [{id: "a", nombre: "Activo"}, {id: "n", nombre: "Inactivo"}];
  portales: Portal[];
  estaciones: Estacion[];
  selectedPortal: Portal;
  selectedEstacion: Estacion;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private portalService: PortalService,
    private estacionService: EstacionService,
    private plataformaService: PlataformaService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Plataforma()); }
          return this.plataformaService.findById(id);
        })
      )
      .subscribe(plataforma => {
          this.plataforma = plataforma;
          if (this.plataforma.activo_plataforma === undefined) {
            this.plataforma.activo_plataforma = 'a';
          }
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'danger', message: 'Error al cargar la información'};
        }
      );
        // Cargar Portal
      this.portalService.cargar().subscribe(data => {
        if (data.length === 0) {
          this.feedback = {type: 'warning', message: 'No existen Portales'};
        } else {
          this.portales = data;
          this.setPortal();
        }
      }, error => {
        this.feedback = {type: 'danger', message: 'No existen Portales'};
      });
  }

  save() {
    this.plataforma.id_portal = this.selectedPortal.id_portal;
    this.plataformaService.save(this.plataforma).subscribe(
      plataforma => {
        this.plataforma = plataforma;
        this.feedback = {type: 'success', message: 'Guardado correctamente con el ID ' + this.plataforma.id_plataforma};
        setTimeout(() => {
          this.router.navigate(['/plataformas']);
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
    this.router.navigate(['/plataformas']);
  }

  setPortal() {
    this.portales.forEach(portal => {
      if (portal.id_portal == this.plataforma.id_portal) {
        this.selectedPortal = portal;
      }
    });
  }


}
