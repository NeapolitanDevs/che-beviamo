import { Component, OnInit } from '@angular/core';
import { map, take } from 'rxjs';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  test = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  getAll() {
    this.apiService.getAll()
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
