import { NgModule } from '@angular/core';
import { DetailDialogComponent } from 'src/shared/detail-dialog/detail-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DialogDirective } from 'src/directive/dialog.directive';

@NgModule({
  declarations: [
    DetailDialogComponent,
    DialogDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    DialogDirective
  ]
})
export class SharedModule { }
