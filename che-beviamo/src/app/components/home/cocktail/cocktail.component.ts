import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Subscription, take } from 'rxjs';
import { CocktailClass } from 'src/models/cocktail';
import { CocktailService } from './cocktail.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit, OnDestroy {
  
  loadCocktail$ = new BehaviorSubject<boolean>(false);
  cocktailList: CocktailClass[] = new Array<CocktailClass>();
  ingredientList$ = this.cocktailService.getAllIngredient();

  ingredient = new FormControl('');
  cocktailName = new FormControl();

  sub1$ = new Subscription();
  sub2$ = new Subscription();

  constructor(
    private cocktailService: CocktailService,
    public translate: TranslateService
    ) { }

  ngOnInit(): void {
    this.getRandom();

    this.sub1$ = this.ingredient.valueChanges.subscribe(value => {
      if (value) this.cocktailName.reset();
      if (value?.length > 0) this.search(true, value);
    });

    this.sub2$ = this.cocktailName.valueChanges.subscribe(value => {
      if (value) this.ingredient.reset();
      if (value?.length > 2) this.search(false, value);
    });
  }

  search(ingredient: boolean, value: any) {
    const apiCall = ingredient ? 
      this.cocktailService.getByMultipleIngredient(value.toString()) :
      this.cocktailService.getByName(value);

    apiCall.pipe(take(1)).subscribe((resp) => {
        console.log('Response', resp);
        this.cocktailList = resp;
    });
  }

  getRandom() {
    this.loadCocktail$.next(false);
    this.cocktailService.getMultipleRandom(8).pipe(take(1)).subscribe(x => {
      this.loadCocktail$.next(true);
      console.log(x);
      this.cocktailList = x;
    });
  }

  reset() {
    this.ingredient.reset();
    this.cocktailName.reset();
    this.getRandom();
  }

  ngOnDestroy(): void {
    this.sub1$.unsubscribe();
    this.sub2$.unsubscribe();
  }
}
