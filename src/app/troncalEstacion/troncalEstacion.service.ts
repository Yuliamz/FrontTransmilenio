import { TroncalEstacion } from './troncalEstacion';
import { TroncalEstacionFilter } from './troncalEstacion-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');
@Injectable()
export class TroncalEstacionService {

  troncalEstacionList: TroncalEstacion[] = [];
  api = 'http://localhost:8000/api/trunkStation';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<TroncalEstacion> {
    const url = this.api + '/' + id;
    const params = {};
    return this.http.get<TroncalEstacion>(url, {params, headers});
  }

  load(filter: TroncalEstacionFilter): void {
    this.find(filter).subscribe(result => {
        this.troncalEstacionList = result;
        if(filter.id_search){
          this.troncalEstacionList = this.troncalEstacionList.filter( te => te.id_troncal + '' == filter.id_search || te.id_estacion + '' == filter.id_search);
        }
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: TroncalEstacionFilter): Observable<TroncalEstacion[]> {
    const params = {
      'id_search': filter.id_search,
    };

    return this.http.get<TroncalEstacion[]>(this.api, {params, headers});
  }

  cargar(): Observable<TroncalEstacion[]> {
    return this.http.get<TroncalEstacion[]>(this.api, {
      headers: {'Accept': 'application/json', 'active': 'a'}
   });
  }

  save(entity: TroncalEstacion): Observable<TroncalEstacion> {
    let params = new HttpParams();
    let url = '';
    if (entity.id_troncal_estacion) {
      url = this.api + '/' + entity.id_troncal_estacion;
      // params = new HttpParams().set('ID', entity.id_troncal_estacion.toString());
      return this.http.put<TroncalEstacion>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<TroncalEstacion>(url, entity, {headers, params});
    }
  }

  delete(entity: TroncalEstacion): Observable<TroncalEstacion> {
    let params = new HttpParams();
    let url = '';
    if (entity.id_troncal_estacion) {
      url = this.api + '/' + entity.id_troncal_estacion;
      // params = new HttpParams().set('ID', entity.id_troncal_estacion.toString());
      return this.http.delete<TroncalEstacion>(url, {headers, params});
    }
    return null;
  }
}

