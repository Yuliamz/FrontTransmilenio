import { Bus } from './bus';
import { BusFilter } from './bus-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');
@Injectable()
export class BusService {

  busList: Bus[] = [];
  api = 'http://localhost:8000/api/bus';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Bus> {
    const url = this.api + '/' + id;
    const params = {};
    return this.http.get<Bus>(url, {params, headers});
  }

  load(filter: BusFilter): void {
    this.find(filter).subscribe(result => {
        this.busList = result;
        if (filter.id_tipo) {
          this.busList = this.busList.filter( te => te.id_tipo_bus + '' == filter.id_tipo);
        }
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: BusFilter): Observable<Bus[]> {
    const params = {
      'id_tipo': filter.id_tipo,
    };

    return this.http.get<Bus[]>(this.api, {params, headers});
  }

  cargar(): Observable<Bus[]> {
    return this.http.get<Bus[]>(this.api, {
      headers: {'Accept': 'application/json', 'active': 'a'}
   });
  }

  save(entity: Bus): Observable<Bus> {
    const params = new HttpParams();
    let url = '';
    if (entity.id_bus) {
      url = this.api + '/' + entity.id_bus;
      // params = new HttpParams().set('ID', entity.id_bus.toString());
      return this.http.put<Bus>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Bus>(url, entity, {headers, params});
    }
  }

  delete(entity: Bus): Observable<Bus> {
    const params = new HttpParams();
    let url = '';
    if (entity.id_bus) {
      url = this.api + '/' + entity.id_bus;
      // params = new HttpParams().set('ID', entity.id_bus.toString());
      return this.http.delete<Bus>(url, {headers, params});
    }
    return null;
  }
}

