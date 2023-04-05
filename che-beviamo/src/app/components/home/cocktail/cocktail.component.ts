import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, take } from 'rxjs';
import { CocktailClass } from 'src/models/cocktail';
import { CocktailService } from './cocktail.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailDialogComponent } from 'src/shared/detail-dialog/detail-dialog.component';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {
// mettere variabili per il componente riguardante la scelta fatta in start
  
  loadCocktail$ = new BehaviorSubject<boolean>(false);
  cocktailList: CocktailClass[] = new Array<CocktailClass>();
  ingredientList$ = this.cocktailService.getAllIngredient();

  ingredient = new FormControl('');

  constructor(
    private cocktailService: CocktailService,
    public dialog: MatDialog
    ) { }

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
    this.getRandom();
  }
}
