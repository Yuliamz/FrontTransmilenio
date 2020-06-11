import { Troncal } from './troncal';
import { TroncalFilter } from './troncal-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');
@Injectable()
export class TroncalService {

  troncalList: Troncal[] = [];
  api = 'http://localhost:8000/api/trunk';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Troncal> {
    const url = this.api + '/' + id;
    const params = {};
    return this.http.get<Troncal>(url, {params, headers});
  }

  load(filter: TroncalFilter): void {
    this.find(filter).subscribe(result => {
        this.troncalList = result;
        if (filter.nombre_troncal) {
          this.troncalList = this.troncalList.filter( te => te.nombre_troncal + '' == filter.nombre_troncal);
        }
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: TroncalFilter): Observable<Troncal[]> {
    const params = {
      'nombre_troncal': filter.nombre_troncal,
    };

    return this.http.get<Troncal[]>(this.api, {params, headers});
  }

  cargar(): Observable<Troncal[]> {
    return this.http.get<Troncal[]>(this.api, {
      headers: {'Accept': 'application/json', 'active': 'a'}
   });
  }

  save(entity: Troncal): Observable<Troncal> {
    const params = new HttpParams();
    let url = '';
    if (entity.id_troncal) {
      url = this.api + '/' + entity.id_troncal;
      // params = new HttpParams().set('ID', entity.id_troncal.toString());
      return this.http.put<Troncal>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Troncal>(url, entity, {headers, params});
    }
  }

  delete(entity: Troncal): Observable<Troncal> {
    const params = new HttpParams();
    let url = '';
    if (entity.id_troncal) {
      url = this.api + '/' + entity.id_troncal;
      // params = new HttpParams().set('ID', entity.id_troncal.toString());
      return this.http.delete<Troncal>(url, {headers, params});
    }
    return null;
  }
}

