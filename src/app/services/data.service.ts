import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError } from "rxjs";
import { environment } from "../../environments/environment";
import { catchError, map } from "rxjs/operators";
import { Result } from "../shared/models/pokemons";

@Injectable({
	providedIn: "root",
})
export class PokemonDataService {
	apiURL: string = environment.URL;
	constructor(private http: HttpClient) {}

	getPokemons() {
		return this.http.get(this.apiURL).pipe(
			catchError((error: any) => {
				return throwError(error);
			}),
			map((data: Result) => data)
		);
	}
}
