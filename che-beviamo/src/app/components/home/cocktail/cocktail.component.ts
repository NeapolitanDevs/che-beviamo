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
  }

  getAll() {
    this.cocktailService.getAll()
    .pipe(
      take(1)
      )
    .subscribe(x => {
      console.log(x);
      this.cocktailList = x;
    });
  }

}
