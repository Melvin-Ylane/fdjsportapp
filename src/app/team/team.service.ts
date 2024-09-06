import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Team } from './team.model';

@Injectable()
export class TeamService {

  resourceUrl = `${environment.apiUrl}/teams`;

  constructor(private http: HttpClient) { }

  findById(id: string): Observable<Team> {
    return this.http.get<Team>(`${this.resourceUrl}/${id}`);
  }
}
