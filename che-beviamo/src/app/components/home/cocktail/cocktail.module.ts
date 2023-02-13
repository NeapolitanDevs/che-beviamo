import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "src/modules/material.module";
import { CocktailComponent } from "./cocktail.component";

const routes: Routes = [
    {
        path: '',
        component: CocktailComponent,
    }
];

@NgModule({
    declarations: [
        CocktailComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule.forChild(routes)
    ]
})
export class CocktailModule {}