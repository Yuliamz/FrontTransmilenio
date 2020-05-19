import { Estacion } from './estacion';
import { EstacionFilter } from './estacion-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json')
.set('Access-Control-Allow-Origin', '*')
.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
@Injectable()
export class EstacionService {

  estacionList: Estacion[] = [];
  api = 'http://localhost:8000/station';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Estacion> {
    const url = this.api + '/' + id;
    const params = {};
    return this.http.get<Estacion>(url, {params, headers});
  }

  load(filter: EstacionFilter): void {
    this.find(filter).subscribe(result => {
        this.estacionList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: EstacionFilter): Observable<Estacion[]> {
    const params = {
      'nombre_estacion': filter.nombre_estacion,
    };

    return this.http.get<Estacion[]>(this.api, {params, headers});
  }

  save(entity: Estacion): Observable<Estacion> {
    let params = new HttpParams();
    let url = '';
    if (entity.id_estacion) {
      url = this.api + '/' + entity.id_estacion;
      // params = new HttpParams().set('ID', entity.id_estacion.toString());
      return this.http.put<Estacion>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Estacion>(url, entity, {headers, params});
    }
  }

  delete(entity: Estacion): Observable<Estacion> {
    let params = new HttpParams();
    let url = '';
    if (entity.id_estacion) {
      url = this.api + '/' + entity.id_estacion;
      // params = new HttpParams().set('ID', entity.id_estacion.toString());
      return this.http.delete<Estacion>(url, {headers, params});
    }
    return null;
  }
}

