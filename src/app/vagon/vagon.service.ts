import { Vagon } from './vagon';
import { VagonFilter } from './vagon-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');
@Injectable()
export class VagonService {

  vagonList: Vagon[] = [];
  api = 'http://localhost:8000/api/wagon';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Vagon> {
    const url = this.api + '/' + id;
    const params = {};
    return this.http.get<Vagon>(url, {params, headers});
  }

  load(filter: VagonFilter): void {
    this.find(filter).subscribe(result => {
        this.vagonList = result;
        if(filter.id_plataforma){
          this.vagonList = this.vagonList.filter( te => te.id_plataforma+''==filter.id_plataforma);
        }
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: VagonFilter): Observable<Vagon[]> {
    const params = {
      'id_plataforma': filter.id_plataforma,
    };

    return this.http.get<Vagon[]>(this.api, {params, headers});
  }

  cargar(): Observable<Vagon[]> {
    return this.http.get<Vagon[]>(this.api, {
      headers: {'Accept': 'application/json', 'active': 'a'}
   });
  }

  save(entity: Vagon): Observable<Vagon> {
    let params = new HttpParams();
    let url = '';
    if (entity.id_vagon) {
      url = this.api + '/' + entity.id_vagon;
      // params = new HttpParams().set('ID', entity.id_vagon.toString());
      return this.http.put<Vagon>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Vagon>(url, entity, {headers, params});
    }
  }

  delete(entity: Vagon): Observable<Vagon> {
    let params = new HttpParams();
    let url = '';
    if (entity.id_vagon) {
      url = this.api + '/' + entity.id_vagon;
      // params = new HttpParams().set('ID', entity.id_vagon.toString());
      return this.http.delete<Vagon>(url, {headers, params});
    }
    return null;
  }
}

