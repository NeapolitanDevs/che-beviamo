import { Component, OnInit } from '@angular/core';
import { map, take } from 'rxjs';
import { CocktailService } from 'src/services/cocktail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  test = [];

  constructor(private cockTailService: CocktailService) { }

  ngOnInit(): void {
  }

  getAll() {
    this.cockTailService.getAll()
    .pipe(
      map((x: any) => x.body),
      take(1)
      )
    .subscribe(x => {
      console.log(x);
      this.test = x;
    });
  }

}
