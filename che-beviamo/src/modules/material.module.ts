import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const materialModules = [
  MatCardModule,
  MatButtonModule
];

@NgModule({
  imports: [
    ...materialModules
  ],
  exports: [
    ...materialModules
  ]
})
export class MaterialModule { }
