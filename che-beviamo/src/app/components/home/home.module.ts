import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "src/modules/material.module";
import { HomeComponent } from "./home.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'cocktail',
                loadChildren: () =>
                    import('./cocktail/cocktail.module')
                    .then(m => m.CocktailModule)
            }
        ]
    }
];

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule.forChild(routes)
    ]
})
export class HomeModule {}