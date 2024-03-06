import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CREATORS } from '../constant';

@Component({
  selector: 'app-detail-dialog',
  templateUrl: './detail-dialog.component.html',
  styleUrls: ['./detail-dialog.component.scss']
})
export class DetailDialogComponent implements OnInit {

  creatorsList: {name: string, link: string}[] = CREATORS;

  constructor(public dialogRef: MatDialogRef<DetailDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}
  ngOnInit(): void {}
}
