import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "src/modules/material.module";
import { SharedModule } from "src/modules/shared.module";
import { InfoCreatorsComponent } from "./info-creators.component";

const routes: Routes = [
    {
        path: '',
        component: InfoCreatorsComponent,
    }
];

@NgModule({
    declarations: [
        InfoCreatorsComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class InfoCreatorsModule {}