import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { League } from 'src/app/league/league.model';

@Injectable({
	providedIn: 'root'
})
export class StoreService {

	storage = localStorage;

	leagueSubject: BehaviorSubject<League | null> = new BehaviorSubject<League | null>(null);
	readonly $leagueSubject = this.leagueSubject.asObservable();
	
	unsubscriber: Subject<void> = new Subject();

	constructor() {}

}
