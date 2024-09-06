import { NgModule } from '@angular/core';
import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';
import { SharedModule } from '../shared/shared.module';
import { TeamResolver } from './team.resolver';
import { TeamService } from './team.service';


@NgModule({
  declarations: [
    TeamComponent
  ],
  imports: [
    SharedModule,
    TeamRoutingModule
  ],
  providers: [
    TeamService,
    TeamResolver
  ]
})
export class TeamModule { }
