import { Component, OnInit } from '@angular/core';
import { LeagueService } from './league.service';
import { Team } from '../team/team.model';
import { Router } from '@angular/router';
import { StoreService } from '../shared/services/store.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
	selector: 'app-league',
	templateUrl: './league.component.html',
	styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements OnInit {

	searchValue: string | null = null;

	leagueServi: any;

	teamsList: Team[] = [];
	
	onSearch: boolean = false;
	
	unsubscriber: Subject<void> = new Subject();

	constructor(
		private storeService: StoreService,
		private leagueService: LeagueService,
		private router: Router
	) {
		this.leagueServi = this.leagueService;
	}

	ngOnInit(): void {
		this.storeService.leagueSubject.pipe(takeUntil(this.unsubscriber)).subscribe({
			next: (res) => {
				if (res) {
					this.teamsList = res.teams;
				}
			}
		});
	}

	onSearchInput(event: string) {
		this.teamsList = [];
		if (event) {
			this.onSearch = true;
			this.leagueService.findById(event).subscribe({
				next: (res) => {
					this.onSearch = false;
					this.storeService.leagueSubject.next(res);
				},
				error: () => {
					this.onSearch = false;
				}
			});
		}else{

		}
	}

	goToTeamDetails(id: string): void {
		this.router.navigate(['teams', id]);
	}

	ngOnDestroy(): void {
		this.unsubscriber.next();
		this.unsubscriber.complete();
	}

}
