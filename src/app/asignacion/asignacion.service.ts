import { Asignacion } from './asignacion';
import { AsignacionFilter } from './asignacion-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import * as moment from 'moment';

const headers = new HttpHeaders().set('Accept', 'application/json');
@Injectable()
export class AsignacionService {

  asignacionList: Asignacion[] = [];
  api = 'http://localhost:8000/api/assignment';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Asignacion> {
    const url = this.api + '/' + id;
    const params = {};
    return this.http.get<Asignacion>(url, {params, headers});
  }

  load(filter: AsignacionFilter): void {
    this.find(filter).subscribe(result => {
        this.asignacionList = result;
        if (filter.id_search) {
          this.asignacionList = this.asignacionList.filter( te => te.id_bus + '' == filter.id_search || te.id_ruta + '' == filter.id_search);
        }
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: AsignacionFilter): Observable<Asignacion[]> {
    const params = {
      'id_search': filter.id_search,
    };

    return this.http.get<Asignacion[]>(this.api, {params, headers});
  }

  cargar(): Observable<Asignacion[]> {
    return this.http.get<Asignacion[]>(this.api, {
      headers: {'Accept': 'application/json', 'active': 'a'}
   });
  }

  save(entity: Asignacion): Observable<Asignacion> {
    const params = new HttpParams();
    let url = '';
    entity.fecha_inicio_operacion = moment(entity.fecha_inicio).format('YYYY/MM/DD');
    if (entity.fecha_fin) {
      entity.fecha_fin_operacion = moment(entity.fecha_fin).format('YYYY/MM/DD');
    }
    console.log(entity);
    if (entity.id_asignacion_ruta) {
      url = this.api + '/' + entity.id_asignacion_ruta;
      // params = new HttpParams().set('ID', entity.id_asignacion_ruta.toString());
      return this.http.put<Asignacion>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Asignacion>(url, entity, {headers, params});
    }
  }

  delete(entity: Asignacion): Observable<Asignacion> {
    const params = new HttpParams();
    let url = '';
    if (entity.id_asignacion_ruta) {
      url = this.api + '/' + entity.id_asignacion_ruta;
      // params = new HttpParams().set('ID', entity.id_asignacion_ruta.toString());
      return this.http.delete<Asignacion>(url, {headers, params});
    }
    return null;
  }
}

