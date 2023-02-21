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
    //this.getAllCocktail();
    this.getRandom();
  }

  /* getAllCocktail() {
    this.cocktailService.getAllCocktail()
    .pipe(
      take(1)
      )
    .subscribe(x => {
      this.loadCocktail$.next(true);
      console.log(x);
      this.cocktailList = x;
    });
  } */

  getByIngredient() {
    const ingredient = this.ingredient.value.toString();
    if (ingredient) {
      this.loadCocktail$.next(false);
      this.cocktailService.getByIngredient(ingredient)
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
    const apiCall = this.cocktailService.getRandom();
    const apiCallList = new Array<any>();
    for (let index = 0; index < 5; index++) {
      apiCallList.push(apiCall);
    }
    forkJoin(apiCallList).pipe(
      take(1)
    )
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
