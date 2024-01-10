import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { MatchesComponent } from './matches/matches.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'match/joined',
    pathMatch: 'full',
  },
 
  {
    path: 'match',
    component: IndexComponent,
    children: [
      {
        path: ':category',
        component: MatchesComponent,
      },
    ],
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
