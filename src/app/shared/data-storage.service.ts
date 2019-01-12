import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient) {

  }

  public getData(endpoint: string, options?): Observable<any> {
    return this.http.get(endpoint, options);
  }

  public postData(endpoint: string, data, options?): Observable<any> {
    return this.http.post(endpoint, data, options);
  }

  public deleteData(endpoint: string, options?): Observable<any> {
    return this.http.delete(endpoint, options);
  }

  public putData(endpoint: string, data, options?): Observable<any> {
    return this.http.put(endpoint, data, options);
  }
}
