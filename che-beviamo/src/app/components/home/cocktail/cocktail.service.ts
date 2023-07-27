import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CocktailClass } from 'src/models/cocktail';
import { Ingredientlass } from 'src/models/ingredient';
import { ApiService } from 'src/services/api.service';
import { ROUTE_TYPE } from 'src/shared/constant';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private apiService: ApiService) { }

  getAllIngredient(): Observable<Ingredientlass[]> {
    return this.apiService.getAll(ROUTE_TYPE.ingredient);
  }

  getAllCocktail(): Observable<CocktailClass[]> {
    return this.apiService.getAll(ROUTE_TYPE.cocktail);
  }

  getByMultipleIngredient(ingredients: any) {
    return this.apiService.getByMultipleIngredient(ingredients);
  }

  getMultipleRandom(numberOfDrink: number): Observable<CocktailClass[]> {
    return this.apiService.getMultipleRandom(numberOfDrink);
  }

  getByName(name: string): Observable<CocktailClass> {
    return this.apiService.getByName(name);
  }
}
