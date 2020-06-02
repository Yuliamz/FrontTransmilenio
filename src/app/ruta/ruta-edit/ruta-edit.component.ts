import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RutaService } from '../ruta.service';
import { Ruta } from '../ruta';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-ruta-edit',
  templateUrl: './ruta-edit.component.html'
})
export class RutaEditComponent implements OnInit {

  id: string;
  ruta: Ruta;
  feedback: any = {};
  estados: any[] = [{id: "a", nombre: "Activo"}, {id: "n", nombre: "Inactivo"}];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rutaService: RutaService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Ruta()); }
          return this.rutaService.findById(id);
        })
      )
      .subscribe(ruta => {
          this.ruta = ruta;
          if (this.ruta.activo_ruta === undefined) {
            this.ruta.activo_ruta = 'a';
          }
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error al cargar la información'};
        }
      );
  }

  save() {
    this.rutaService.save(this.ruta).subscribe(
      ruta => {
        this.ruta = ruta;
        this.feedback = {type: 'success', message: 'Guardado correctamente con el ID ' + this.ruta.id_ruta};
        setTimeout(() => {
          this.router.navigate(['/rutas']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'danger', message: 'Error al guardar'};
      }
    );
  }

  cancel() {
    this.router.navigate(['/rutas']);
  }
}
