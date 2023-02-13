import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENDPOINT, ROOT_URL } from 'src/shared/constant';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(ROOT_URL + ENDPOINT.getAll);
  }
}
