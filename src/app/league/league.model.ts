import { Team } from "../team/team.model";

export interface League {
	_id: string;
	name: string;
	sport: string;
	teams: Team[];
}