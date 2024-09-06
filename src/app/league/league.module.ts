import { NgModule } from '@angular/core';
import { LeagueRoutingModule } from './league-routing.module';
import { LeagueComponent } from './league.component';
import { SharedModule } from '../shared/shared.module';
import { LeagueService } from './league.service';


@NgModule({
  declarations: [
    LeagueComponent
  ],
  imports: [
    SharedModule,
    LeagueRoutingModule
  ],
  providers: [
    LeagueService
  ]
})
export class LeagueModule { }
