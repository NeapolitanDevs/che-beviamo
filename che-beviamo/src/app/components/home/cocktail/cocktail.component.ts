import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Subscription, take } from 'rxjs';
import { CocktailClass } from 'src/models/cocktail';
import { CocktailService } from './cocktail.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailDialogComponent } from 'src/shared/detail-dialog/detail-dialog.component';

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
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.getRandom();

    this.sub1$ = this.ingredient.valueChanges.subscribe(value => {
      if (value) this.cocktailName.disable();
    });

    this.sub2$ = this.cocktailName.valueChanges.subscribe(value => {
      if (value) this.ingredient.disable();
    });
  }

  search(ingredient: string[], name: string) {
    if (ingredient || name) {
      this.loadCocktail$.next(false);
      const apiCall = ingredient ? 
        this.cocktailService.getByMultipleIngredient(ingredient.toString()) :
        this.cocktailService.getByName(name);
        
      apiCall
        .pipe(
          take(1)
        )
        .subscribe(x => {
          this.loadCocktail$.next(true);
          console.log('Response', x);
          this.cocktailList = x;
        });
    } else {
      this.getRandom();
    }
  }

  getRandom() {
    this.loadCocktail$.next(false);
    this.cocktailService.getMultipleRandom(8)
    .subscribe(x => {
      this.loadCocktail$.next(true);
      console.log(x);
      this.cocktailList = x;
    });
  }

  openDialog(instruction: string) {
    this.dialog.open(DetailDialogComponent, {
      autoFocus: false,
      restoreFocus: false,
      width: '500px',
      data: {
        instruction
      }
    });
  }

  reset() {
    this.ingredient.reset();
    this.cocktailName.reset();
    this.ingredient.enable();
    this.cocktailName.enable();
    this.getRandom();
  }

  ngOnDestroy(): void {
    this.sub1$.unsubscribe();
    this.sub2$.unsubscribe();
  }
}
