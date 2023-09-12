import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  
  appTitle = 'Che beviamo' + ' v' + environment.appVersion; // mettilo nelle lingue 18i
  
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  goToInfo() {
    this.router.navigate(['/home/info']);
  }

}
