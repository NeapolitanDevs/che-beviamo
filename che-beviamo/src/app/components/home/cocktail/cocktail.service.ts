import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CocktailClass } from 'src/models/cocktail';
import { ApiService } from 'src/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private apiService: ApiService) { }

  getAll(): Observable<CocktailClass[]> {
    return this.apiService.getAll();
  }
}
