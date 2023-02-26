import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, forkJoin, from, mergeMap, take } from 'rxjs';
import { CocktailClass } from 'src/models/cocktail';
import { CocktailService } from './cocktail.service';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {

  loadCocktail$ = new BehaviorSubject<boolean>(false);
  cocktailList: CocktailClass[] = new Array<CocktailClass>();
  ingredientList$ = this.cocktailService.getAllIngredient();

  ingredient = new FormControl('');

  constructor(private cocktailService: CocktailService) { }

  ngOnInit(): void {
    this.getRandom();
  }

  getByMultipleIngredient() {
    const ingredient = this.ingredient.value ? this.ingredient.value.toString() : null;
    if (ingredient) {
      this.loadCocktail$.next(false);
      this.cocktailService.getByMultipleIngredient(ingredient)
      .pipe(
        take(1)
      )
      .subscribe(x => {
        this.loadCocktail$.next(true);
        console.log('Response', x);
        this.cocktailList = x;
      })
    } else {
      this.getRandom();
    }
  }

  getRandom() {
    this.loadCocktail$.next(false);
    this.cocktailService.getMultipleRandom(5)
    .subscribe(x => {
      this.loadCocktail$.next(true);
      console.log(x);
      this.cocktailList = x;
    });
  }

  reset() {
    this.ingredient.reset();
    this.getRandom();
  }
}
