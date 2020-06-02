import { Portal } from './portal';
import { PortalFilter } from './portal-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');
@Injectable()
export class PortalService {

  portalList: Portal[] = [];
  api = 'http://localhost:8000/api/portal';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Portal> {
    const url = this.api + '/' + id;
    const params = {};
    return this.http.get<Portal>(url, {params, headers});
  }

  load(filter: PortalFilter): void {
    this.find(filter).subscribe(result => {
        this.portalList = result;
        if(filter.id_troncal){
          this.portalList = this.portalList.filter( te => te.id_troncal+''==filter.id_troncal);
        }
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  cargar(): Observable<Portal[]> {
    return this.http.get<Portal[]>(this.api, {
      headers: {'Accept':'application/json','active':'a'}
   });
  }

  find(filter: PortalFilter): Observable<Portal[]> {
    const params = {
      'id_troncal': filter.id_troncal,
    };

    return this.http.get<Portal[]>(this.api, {params, headers});
  }

  save(entity: Portal): Observable<Portal> {
    let params = new HttpParams();
    let url = '';
    if (entity.id_portal) {
      url = this.api + '/' + entity.id_portal;
      // params = new HttpParams().set('ID', entity.id_portal.toString());
      return this.http.put<Portal>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Portal>(url, entity, {headers, params});
    }
  }

  delete(entity: Portal): Observable<Portal> {
    let params = new HttpParams();
    let url = '';
    if (entity.id_portal) {
      url = this.api + '/' + entity.id_portal;
      // params = new HttpParams().set('ID', entity.id_portal.toString());
      return this.http.delete<Portal>(url, {headers, params});
    }
    return null;
  }
}

