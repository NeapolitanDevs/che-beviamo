import {NgModule} from '@angular/core';
import { DetailDialogComponent } from 'src/shared/detail-dialog/detail-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { HelpDialogComponent } from 'src/shared/help-dialog/help-dialog.component';
import { InfoDialogComponent } from 'src/shared/info-dialog/info-dialog.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    DetailDialogComponent,
    InfoDialogComponent,
    HelpDialogComponent
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
    TranslateModule
  ]
})
export class SharedModule { }
