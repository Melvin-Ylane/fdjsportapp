import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'leagues'
  },
  { path: 'leagues', loadChildren: () => import('./league/league.module').then(m => m.LeagueModule) },
  { path: 'teams', loadChildren: () => import('./team/team.module').then(m => m.TeamModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
