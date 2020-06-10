import { Ruta } from './ruta';
import { RutaFilter } from './ruta-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');
const headersActivo = new HttpHeaders().set('Accept', 'application/json')
.set('active', 'a');
@Injectable()
export class RutaService {

  rutaList: Ruta[] = [];
  api = 'http://localhost:8000/api/route';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Ruta> {
    const url = this.api + '/' + id;
    const params = {};
    return this.http.get<Ruta>(url, {params, headers});
  }

  load(filter: RutaFilter): void {
    this.find(filter).subscribe(result => {
        this.rutaList = result;
        if(filter.codigo_ruta){
          this.rutaList = this.rutaList.filter( te => te.codigo_ruta + '' == filter.codigo_ruta);
        }
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: RutaFilter): Observable<Ruta[]> {
    const params = {
      'codigo_ruta': filter.codigo_ruta,
    };

    return this.http.get<Ruta[]>(this.api, {params, headers});
  }

  cargar(): Observable<Ruta[]> {
    const params = {};
    return this.http.get<Ruta[]>(this.api, {
      headers: {'Accept': 'application/json', 'active': 'a'}
   });
  }

  save(entity: Ruta): Observable<Ruta> {
    const params = new HttpParams();
    let url = '';
    if (entity.id_ruta) {
      url = this.api + '/' + entity.id_ruta;
      // params = new HttpParams().set('ID', entity.id_ruta.toString());
      return this.http.put<Ruta>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Ruta>(url, entity, {headers, params});
    }
  }

  delete(entity: Ruta): Observable<Ruta> {
    const params = new HttpParams();
    let url = '';
    if (entity.id_ruta) {
      url = this.api + '/' + entity.id_ruta;
      // params = new HttpParams().set('ID', entity.id_ruta.toString());
      return this.http.delete<Ruta>(url, {headers, params});
    }
    return null;
  }
}

