import { Component, OnInit } from '@angular/core';
import { map, take, tap } from 'rxjs';
import { CocktailClass } from 'src/models/cocktail';
import { CocktailService } from './cocktail.service';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {

  cocktailList: CocktailClass[] = new Array<CocktailClass>();

  constructor(private cocktailService: CocktailService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.cocktailService.getAll()
    .pipe(
      take(1)
      )
    .subscribe(x => {
      console.log(x);
      for (let index = 0; index < 3; index++) {
        this.cocktailList = this.cocktailList.concat(x);
      }
    });
  }

}
