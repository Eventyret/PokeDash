export interface Sp {
	Atk: number;
	Def: number;
}

export interface Pokemons {
	Attack: number;
	Battle: number;
	Defense: number;
	Generation: number;
	HP: number;
	Legendary: number;
	Name: string;
	PokedexID: number;
	Sp: Sp;
	Speed: number;
	Sprite: string;
	Total: number;
	Type1: string;
	Type2: string;
}

export interface Result {
	results: Pokemons[];
}
