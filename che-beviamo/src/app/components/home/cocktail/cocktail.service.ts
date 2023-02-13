import { Injectable } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private apiService: ApiService) { }

  getAll() {
    return this.apiService.getAll();
  }
}
