import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  private url = 'http://localhost:8080/api/v1/';

  constructor(private http: HttpClient) {

  }

  getSecciones(endpoint: string) {
    return this.http.get(this.url + endpoint)
  }

  getSeccionesBySeccion(endpoint: string, body: any) {
    return this.http.get(this.url + endpoint, body)
  }
}
