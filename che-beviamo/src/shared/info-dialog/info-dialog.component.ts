import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CREATORS } from '../constant';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.scss']
})
export class InfoDialogComponent implements OnInit {

  creatorsList: {name: string, link: string}[] = CREATORS;

  constructor(public dialogRef: MatDialogRef<InfoDialogComponent>) { }

  ngOnInit(): void {
  }

}
