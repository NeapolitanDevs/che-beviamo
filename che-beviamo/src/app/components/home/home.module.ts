import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "src/modules/material.module";
import { HomeComponent } from "./home.component";
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SharedModule } from "src/modules/shared.module";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'cocktail'
    },
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'cocktail',
                loadChildren: () =>
                    import('./cocktail/cocktail.module')
                    .then(m => m.CocktailModule)
            },
            {
                path: 'info',
                loadChildren: () =>
                    import('./info-creators/info-creators.module')
                    .then(m => m.InfoCreatorsModule)
            },
            {
                path: '',
                redirectTo: 'cocktail'
            }
        ]
    },
];

@NgModule({
    declarations: [
        HomeComponent,
        ToolbarComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class HomeModule {}