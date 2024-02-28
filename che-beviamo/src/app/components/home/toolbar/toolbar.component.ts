import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HelpDialogComponent } from 'src/shared/help-dialog/help-dialog.component';
import { InfoDialogComponent } from 'src/shared/info-dialog/info-dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  
  appTitle = 'Che beviamo'; // mettilo nelle lingue 18i
  
  constructor(
    public router: Router,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
  }

  goToInfo() {
    this.router.navigate(['/home/info']);
  }

  openDialog(info: boolean) {
    this.dialog.open(info ? InfoDialogComponent : HelpDialogComponent, {
      autoFocus: false,
      restoreFocus: false,
      width: '500px'
    });
  }
}
