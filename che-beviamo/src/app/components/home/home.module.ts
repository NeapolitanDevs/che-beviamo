import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "src/modules/material.module";
import { HomeComponent } from "./home.component";
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from "src/modules/shared.module";

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
        ToolbarComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class HomeModule {}