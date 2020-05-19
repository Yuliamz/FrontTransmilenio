import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TipoService } from '../tipo.service';
import { Tipo } from '../tipo';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-tipo-edit',
  templateUrl: './tipo-edit.component.html'
})
export class TipoEditComponent implements OnInit {

  id: string;
  tipo: Tipo;
  feedback: any = {};
  estados: any[] = [{id: "a", nombre: "Activo"}, {id: "n", nombre: "Inactivo"}];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tipoService: TipoService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Tipo()); }
          return this.tipoService.findById(id);
        })
      )
      .subscribe(tipo => {
          this.tipo = tipo;
          if (this.tipo.activo_tipo_bus === undefined) {
            this.tipo.activo_tipo_bus = 'a';
            this.tipo.color = '#000000';
          }
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error al cargar la información'};
        }
      );
  }

  save() {
    this.tipoService.save(this.tipo).subscribe(
      tipo => {
        this.tipo = tipo;
        this.feedback = {type: 'success', message: 'Guardado correctamente con el ID ' + this.tipo.id_tipo_bus};
        setTimeout(() => {
          this.router.navigate(['/tipos']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: 'Error al guardar'};
      }
    );
  }

  cancel() {
    this.router.navigate(['/tipos']);
  }
}
