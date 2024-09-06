import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { League } from './league.model';
import { Observable } from 'rxjs';
import { createRequestOption } from '../shared/utils/request-utils';
import { Pagination } from '../shared/models/pagination.model';

@Injectable()
export class LeagueService {

  resourceUrl = `${environment.apiUrl}/leagues`;

  constructor(private http: HttpClient) { }

  findAllWithPagination(reqParams?: any): Observable<Pagination<League[]>> {
    const options = createRequestOption(reqParams);
    return this.http.get<Pagination<League[]>>(this.resourceUrl, {params: options});
  }

  findById(id: string): Observable<League> {
    return this.http.get<League>(`${this.resourceUrl}/${id}`);
  }
}
