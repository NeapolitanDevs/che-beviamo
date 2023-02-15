import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() menuEmitter = new EventEmitter();
  appTitle = 'Che beviamo'; // mettilo nelle lingue 18i
  constructor() { }

  ngOnInit(): void {
  }

}
