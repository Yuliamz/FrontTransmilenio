import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TroncalService } from '../troncal.service';
import { Troncal } from '../troncal';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-troncal-edit',
  templateUrl: './troncal-edit.component.html'
})
export class TroncalEditComponent implements OnInit {

  id: string;
  troncal: Troncal;
  feedback: any = {};
  estados: any[] = [{id: "a", nombre: "Activo"}, {id: "n", nombre: "Inactivo"}];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private troncalService: TroncalService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Troncal()); }
          return this.troncalService.findById(id);
        })
      )
      .subscribe(troncal => {
          this.troncal = troncal;
          if (this.troncal.activo_troncal === undefined) {
            this.troncal.activo_troncal = 'a';
            this.troncal.color_troncal = '#000000';
          }
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error al cargar la información'};
        }
      );
  }

  save() {
    this.troncalService.save(this.troncal).subscribe(
      troncal => {
        this.troncal = troncal;
        this.feedback = {type: 'success', message: 'Guardado correctamente con el ID ' + this.troncal.id_troncal};
        setTimeout(() => {
          this.router.navigate(['/troncals']);
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
    this.router.navigate(['/troncals']);
  }
}
