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

  getByIngredient(ingredients: any): Observable<CocktailClass[]> {
    return this.apiService.getByIngredient(ingredients);
  }

  getRandom(): Observable<CocktailClass> {
    return this.apiService.getRandom();
  }
}
