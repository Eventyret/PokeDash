import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PokemonDataService {

  constructor(private http: HttpClient) { }

  getPokemons() {
	return this.http.get("https://api.dehlin.info/api/1.1/tables/newPokemons/rows?limit=800").map(res => res);
  }

}
