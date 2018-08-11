import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError } from "rxjs";

// new import
import { map } from "rxjs/operators";
import "rxjs/add/operator/catch";
import { Result } from "../shared/models/pokemons";

@Injectable({
	providedIn: "root"
})
export class PokemonDataService {
	constructor(private http: HttpClient) {}

	getPokemons() {
		return this.http
			.get("https://pokedash.herokuapp.com/api")
			.pipe(map((data: Result) => data))
			.catch((error: any) => {
				return throwError(error);
			});
	}
}
