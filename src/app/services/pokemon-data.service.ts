import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PokemonDataService {

  constructor(private http: Http) { }

  getPokemons() {
    return this.http.get("https://api.dehlin.info/api/1.1/tables/pokemon/rows?limit=200")
    .map(res => res.json())
  }

}
