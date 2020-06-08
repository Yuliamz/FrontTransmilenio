import { Parada } from './parada';
import { ParadaFilter } from './parada-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');
@Injectable()
export class ParadaService {

  paradaList: Parada[] = [];
  api = 'http://localhost:8000/api/route/';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<any> {
    const url = this.api + id + '/wagon';
    const params = {};
    return this.http.get<any>(url, {params, headers});
  }

  load(filter: ParadaFilter): void {
    this.find(filter).subscribe(result => {
        this.paradaList = result;
        if (filter.id_ruta) {
          this.paradaList = this.paradaList.filter( te => te.id_ruta + '' == filter.id_ruta);
        }
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: ParadaFilter): Observable<Parada[]> {
    const params = {
      'id_ruta': filter.id_ruta,
    };

    return this.http.get<Parada[]>(this.api, {params, headers});
  }

  cargar(): Observable<Parada[]> {
    return this.http.get<Parada[]>(this.api, {
      headers: {'Accept': 'application/json', 'active': 'a'}
   });
  }

  cargarPardasPorRuta(id_ruta: number): Observable<Parada[]> {
    return this.http.get<Parada[]>(this.api + id_ruta, { headers: {'Accept': 'application/json'}});
  }

  save(entity: Parada): Observable<Parada> {
    const params = new HttpParams();
    let url = '';
    if (entity.id_ruta) {
      url = this.api + entity.id_ruta + '/wagon';
      return this.http.post<Parada>(url, entity, {headers, params});
    }
  }

  update(entity: Parada): Observable<Parada> {
    const params = new HttpParams();
    let url = '';
    if (entity.id_ruta) {
      url = this.api + entity.id_ruta + '/wagon';
      return this.http.put<Parada>(url, entity, {headers, params});
    }
  }

  delete(entity: Parada): Observable<Parada> {
    const params = new HttpParams();
    let url = '';
    if (entity.id_ruta) {
      url = this.api + entity.id_ruta + '/wagon';
      // params = new HttpParams().set('ID', entity.id_parada.toString());
      return this.http.delete<Parada>(url, {headers, params});
    }
    return null;
  }
}

