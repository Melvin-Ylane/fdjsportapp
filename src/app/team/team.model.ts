import { Player } from "../shared/models/player.model";

export interface Team {
	_id: string;
	name: string;
	sport: string;
	thumbnail: string;
	players: Player[];
}