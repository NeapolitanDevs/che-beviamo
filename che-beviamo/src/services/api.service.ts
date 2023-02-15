import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENDPOINT, ROOT_URL } from 'src/shared/constant';
import { CocktailClass } from 'src/models/cocktail';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<CocktailClass[]> {
    return this.http.get<{status: number, body: any[]}>(ROOT_URL + ENDPOINT.getAll)
      .pipe(
        map(x => x.body as CocktailClass[])
      );
  }
}
