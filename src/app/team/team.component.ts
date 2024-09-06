import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from './team.model';

@Component({
	selector: 'app-team',
	templateUrl: './team.component.html',
	styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

	team!: Team;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
	) { }

	ngOnInit(): void {
		this.team = this.route.snapshot.data['team'];
	}

	goBack(): void {
		this.router.navigate(['/leagues']);
	}

}
