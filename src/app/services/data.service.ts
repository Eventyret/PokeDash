import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError } from "rxjs";

// new import
import { map } from "rxjs/operators";
import "rxjs/add/operator/catch";

@Injectable({
	providedIn: "root"
})
export class PokemonDataService {

  constructor(private http: HttpClient) { }

  getPokemons() {
	  return this.http.get("https://pokedash.herokuapp.com/api")
	  .pipe(map((data: any) => data))
	  .catch((error: any) => {
		  return throwError(error);
	  })
  }

}
