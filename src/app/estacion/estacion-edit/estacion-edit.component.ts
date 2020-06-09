import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EstacionService } from '../estacion.service';
import { Estacion } from '../estacion';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-estacion-edit',
  templateUrl: './estacion-edit.component.html'
})
export class EstacionEditComponent implements OnInit {

  id: string;
  estacion: Estacion;
  feedback: any = {};
  estados: any[] = [{id: "a", nombre: "Activo"}, {id: "n", nombre: "Inactivo"}];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private estacionService: EstacionService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Estacion()); }
          return this.estacionService.findById(id);
        })
      )
      .subscribe(estacion => {
          this.estacion = estacion;
          if (this.estacion.activo_estacion === undefined) {
            this.estacion.activo_estacion = 'a';
          }
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error al cargar la información'};
        }
      );
  }

  save() {
    this.estacionService.save(this.estacion).subscribe(
      estacion => {
        this.estacion = estacion;
        this.feedback = {type: 'success', message: 'Guardado correctamente con el ID ' + this.estacion.id_estacion};
        setTimeout(() => {
          this.router.navigate(['/estacions']);
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
    this.router.navigate(['/estacions']);
  }
}
