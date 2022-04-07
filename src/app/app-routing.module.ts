import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTeamComponent } from './create-team/create-team.component';
import { ViewPlayerComponent } from './view-player/view-player.component';
import { ViewTeamComponent } from './view-team/view-team.component';

const routes: Routes = [
  { path: 'view-player', component: ViewPlayerComponent },
  { path: 'create-team', component: CreateTeamComponent },
  { path: 'view-team', component: ViewTeamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
