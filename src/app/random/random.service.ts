import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class RandomService {

  api = 'http://localhost:8000/api/';
  constructor(private http: HttpClient) {
  }

  action(model, action, amount): Observable<any> {
    return this.http.get(this.buildUrl(model, action, amount), {headers});
  }

  send(model, action, file): Observable<any> {
    headers.append('Content-Type', 'multipart/form-data');
    let formData:FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(this.api+model+'/factory/'+action, formData, {headers});
  }

  buildUrl(model, action, amount) {
    return this.api+model+'/factory/'+action+'/'+amount;
  }
}
