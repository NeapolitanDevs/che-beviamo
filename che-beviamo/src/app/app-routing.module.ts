import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/home/home.module')
      .then(m => m.HomeModule)
  },
  {
    path: 'start',
    loadChildren: () =>
      import('./components/start/start.module')
      .then(m => m.StartModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
