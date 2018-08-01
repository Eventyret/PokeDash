export interface _id {
	$oid: string;
}

export interface Sp {
	 Atk: number;
	 Def: number;
}

export interface Pokemons {
	_id: _id;
	id: number;
	name: string;
	type1: string;
	type2: string;
	total: number;
	HP: number;
	Attack: number;
	Defense: number;
	SP: Sp;
	Speed: number;
	generation: number;
	legendary: number;
	battle: number;
}
