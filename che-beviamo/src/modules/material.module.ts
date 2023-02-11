import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

const materialModules = [
  MatCardModule
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
