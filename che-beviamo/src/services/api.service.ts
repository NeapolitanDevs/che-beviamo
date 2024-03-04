import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENDPOINT, ROOT_URL, ROUTE_TYPE } from 'src/shared/constant';
import { CocktailClass } from 'src/models/cocktail';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAll(type: string): Observable<any[]> {
    return this.http.get<{status: number, body: any[]}>(ROOT_URL + type + ENDPOINT.getAll)
      .pipe(
        map(x => x.body)
      );
  }

  getByMultipleIngredient(ingredients: any) {
    return this.http.get<any>(ROOT_URL + ROUTE_TYPE.cocktail + ENDPOINT.getByMultipleIngredient + '/?ingredient=' + ingredients)
    .pipe(
      map(x => x.body)
    );
  }

  getMultipleRandom(numberOfDrink: number): Observable<CocktailClass[]> {
    return this.http.get<any>(ROOT_URL + ROUTE_TYPE.cocktail + ENDPOINT.getMultipleRandom + '/' + numberOfDrink)
    .pipe(
      map(x => x.body)
    );
  }

  getByName(name: string): Observable<CocktailClass[]> {
    return this.http.get<any>(ROOT_URL + ROUTE_TYPE.cocktail + ENDPOINT.getByName + '/' + name)
    .pipe(
      map(x => x.body)
    );
  }

  getAllNames(name: string): Observable<any> {
    return this.http.get<any>(ROOT_URL + ROUTE_TYPE.cocktail + ENDPOINT.getAllNames + '/' + name)
    .pipe(
      map(x => x.body)
    );
  }
}
