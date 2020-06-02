import { Plataforma } from './plataforma';
import { PlataformaFilter } from './plataforma-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');
@Injectable()
export class PlataformaService {

  plataformaList: Plataforma[] = [];
  api = 'http://localhost:8000/api/platform';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Plataforma> {
    const url = this.api + '/' + id;
    const params = {};
    return this.http.get<Plataforma>(url, {params, headers});
  }

  load(filter: PlataformaFilter): void {
    this.find(filter).subscribe(result => {
        this.plataformaList = result;
        if(filter.id_portal){
          this.plataformaList = this.plataformaList.filter( te => te.id_portal+''==filter.id_portal);
        }
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: PlataformaFilter): Observable<Plataforma[]> {
    const params = {
      'id_portal': filter.id_portal,
    };

    return this.http.get<Plataforma[]>(this.api, {params, headers});
  }

  cargar(): Observable<Plataforma[]> {
    return this.http.get<Plataforma[]>(this.api, {
      headers: {'Accept':'application/json','active':'a'}
   });
  }

  save(entity: Plataforma): Observable<Plataforma> {
    let params = new HttpParams();
    let url = '';
    if (entity.id_plataforma) {
      url = this.api + '/' + entity.id_plataforma;
      // params = new HttpParams().set('ID', entity.id_plataforma.toString());
      return this.http.put<Plataforma>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Plataforma>(url, entity, {headers, params});
    }
  }

  delete(entity: Plataforma): Observable<Plataforma> {
    let params = new HttpParams();
    let url = '';
    if (entity.id_plataforma) {
      url = this.api + '/' + entity.id_plataforma;
      // params = new HttpParams().set('ID', entity.id_plataforma.toString());
      return this.http.delete<Plataforma>(url, {headers, params});
    }
    return null;
  }
}

