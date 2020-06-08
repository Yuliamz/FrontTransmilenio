import { Horario } from './horario';
import { HorarioFilter } from './horario-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');
@Injectable()
export class HorarioService {

  horarioList: Horario[] = [];
  api = 'http://localhost:8000/api/trunk';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Horario> {
    const url = this.api + '/' + id;
    const params = {};
    return this.http.get<Horario>(url, {params, headers});
  }

  load(filter: HorarioFilter): void {
    this.find(filter).subscribe(result => {
        this.horarioList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: HorarioFilter): Observable<Horario[]> {
    const params = {
      'hora_inicio': filter.hora_inicio,
    };

    return this.http.get<Horario[]>(this.api, {params, headers});
  }

  cargar(): Observable<Horario[]> {
    return this.http.get<Horario[]>(this.api, {
      headers: {'Accept':'application/json','active':'a'}
   });
  }

  save(entity: Horario): Observable<Horario> {
    let params = new HttpParams();
    let url = '';
    if (entity.id_horario) {
      url = this.api + '/' + entity.id_horario;
      // params = new HttpParams().set('ID', entity.id_horario.toString());
      return this.http.put<Horario>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Horario>(url, entity, {headers, params});
    }
  }

  delete(entity: Horario): Observable<Horario> {
    let params = new HttpParams();
    let url = '';
    if (entity.id_horario) {
      url = this.api + '/' + entity.id_horario;
      // params = new HttpParams().set('ID', entity.id_horario.toString());
      return this.http.delete<Horario>(url, {headers, params});
    }
    return null;
  }
}

