import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'matches',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path : 'matches',
        data: {title: 'Matches'},
        loadChildren : () => import('./pages/pages.module').then((m)=> m.PagesModule)
    
      },
      {
        path : 'prime',
        data:{title:'Prime'},
        loadChildren : () => import('./prime/prime/prime.module').then((m)=>m.PrimeModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
