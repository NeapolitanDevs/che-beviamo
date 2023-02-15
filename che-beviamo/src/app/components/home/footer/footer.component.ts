import { Component, OnInit } from '@angular/core';
import { CREATORS } from 'src/shared/constant';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  priority = Math.floor(Math.random() * 2);

  nameList: string[] = CREATORS;

  constructor() { }

  ngOnInit(): void {
    this.shuffle(this.nameList);
  }

  private shuffle(array: string[]) {
    return array.sort(() => Math.random() - 0.5);
  }

}
