import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { Team } from './team.model';
import { TeamService } from './team.service';

@Injectable()
export class TeamResolver implements Resolve<Team> {
  constructor(
    private teamService: TeamService,
    private router: Router
  ){}

  resolve(route: ActivatedRouteSnapshot): Observable<Team> {
    const id = route.params['id'];
    return this.teamService.findById(id).pipe(
      catchError(() =>{
        this.router.navigate([`/leagues`]);
        return EMPTY;
      })
    );
  }
}
