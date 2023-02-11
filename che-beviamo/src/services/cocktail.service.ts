import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http: HttpClient) { }

  rootURL = '/api';

  getAll() {
    return this.http.get(this.rootURL + '/getAll');
  }
}
