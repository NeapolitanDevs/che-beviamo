import { Component, OnInit } from '@angular/core';
import { DIALOGTYPE } from 'src/shared/constant';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  
  dialogType = DIALOGTYPE;

  constructor() { }
  ngOnInit(): void {}
}
