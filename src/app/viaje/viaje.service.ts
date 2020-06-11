import { Viaje } from './viaje';
import { ViajeFilter } from './viaje-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import * as moment from 'moment';

const headers = new HttpHeaders().set('Accept', 'application/json');
@Injectable()
export class ViajeService {

  viajeList: Viaje[] = [];
  api = 'http://localhost:8000/api/travel';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Viaje> {
    const url = this.api + '/' + id;
    const params = {};
    return this.http.get<Viaje>(url, {params, headers});
  }

  load(filter: ViajeFilter): void {
    this.find(filter).subscribe(result => {
        this.viajeList = result;
        if (filter.id_asignacion_ruta) {
          this.viajeList = this.viajeList.filter( te => te.id_asignacion_ruta + '' == filter.id_asignacion_ruta);
        }
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: ViajeFilter): Observable<Viaje[]> {
    const params = {
      'id_asignacion_ruta': filter.id_asignacion_ruta,
    };

    return this.http.get<Viaje[]>(this.api, {params, headers});
  }

  cargar(): Observable<Viaje[]> {
    return this.http.get<Viaje[]>(this.api, {
      headers: {'Accept': 'application/json', 'active': 'a'}
   });
  }

  save(entity: Viaje): Observable<Viaje> {
    const params = new HttpParams();
    let url = '';
    entity.fecha_inicio_viaje = moment(entity.fecha_inicio).format('YYYY-MM-DD HH:mm:ss');
    entity.fecha_fin_viaje = moment(entity.fecha_fin).format('YYYY-MM-DD HH:mm:ss');
    if (entity.id_viaje) {
      url = this.api + '/' + entity.id_viaje;
      // params = new HttpParams().set('ID', entity.id_viaje.toString());
      return this.http.put<Viaje>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Viaje>(url, entity, {headers, params});
    }
  }

  delete(entity: Viaje): Observable<Viaje> {
    const params = new HttpParams();
    let url = '';
    if (entity.id_viaje) {
      url = this.api + '/' + entity.id_viaje;
      // params = new HttpParams().set('ID', entity.id_viaje.toString());
      return this.http.delete<Viaje>(url, {headers, params});
    }
    return null;
  }
}

