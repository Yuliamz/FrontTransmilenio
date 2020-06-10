import { Tipo } from './tipo';
import { TipoFilter } from './tipo-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Portal} from '../portal/portal';

const headers = new HttpHeaders().set('Accept', 'application/json');
@Injectable()
export class TipoService {

  tipoList: Tipo[] = [];
  api = 'http://localhost:8000/api/bustype';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Tipo> {
    const url = this.api + '/' + id;
    const params = {};
    return this.http.get<Tipo>(url, {params, headers});
  }

  load(filter: TipoFilter): void {
    this.find(filter).subscribe(result => {
        this.tipoList = result;
        if(filter.nombre_tipo){
          this.tipoList = this.tipoList.filter( te => te.nombre_tipo + '' == filter.nombre_tipo);
        }
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  cargar(): Observable<Tipo[]> {
    return this.http.get<Tipo[]>(this.api, {
      headers: {'Accept': 'application/json', 'active': 'a'}
    });
  }

  find(filter: TipoFilter): Observable<Tipo[]> {
    const params = {
      'nombre_tipo': filter.nombre_tipo,
    };

    return this.http.get<Tipo[]>(this.api, {params, headers});
  }

  save(entity: Tipo): Observable<Tipo> {
    const params = new HttpParams();
    let url = '';
    if (entity.id_tipo_bus) {
      url = this.api + '/' + entity.id_tipo_bus;
      // params = new HttpParams().set('ID', entity.id_tipo.toString());
      return this.http.put<Tipo>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Tipo>(url, entity, {headers, params});
    }
  }

  delete(entity: Tipo): Observable<Tipo> {
    const params = new HttpParams();
    let url = '';
    if (entity.id_tipo_bus) {
      url = this.api + '/' + entity.id_tipo_bus;
      // params = new HttpParams().set('ID', entity.id_tipo.toString());
      return this.http.delete<Tipo>(url, {headers, params});
    }
    return null;
  }
}

