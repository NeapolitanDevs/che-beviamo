import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "src/modules/material.module";
import { SharedModule } from "src/modules/shared.module";
import { StartComponent } from "./start.component";

const routes: Routes = [
    {
        path: '',
        component: StartComponent
    },
];

@NgModule({
    declarations: [
        StartComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class StartModule {}