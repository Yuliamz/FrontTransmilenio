import { Tipo } from './tipo';
import { TipoFilter } from './tipo-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');
@Injectable()
export class TipoService {

  tipoList: Tipo[] = [];
  api = 'http://localhost:8000/api/busType';

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
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: TipoFilter): Observable<Tipo[]> {
    const params = {
      'nombre_tipo': filter.nombre_tipo,
    };

    return this.http.get<Tipo[]>(this.api, {params, headers});
  }

  save(entity: Tipo): Observable<Tipo> {
    let params = new HttpParams();
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
    let params = new HttpParams();
    let url = '';
    if (entity.id_tipo_bus) {
      url = this.api + '/' + entity.id_tipo_bus;
      // params = new HttpParams().set('ID', entity.id_tipo.toString());
      return this.http.delete<Tipo>(url, {headers, params});
    }
    return null;
  }
}

