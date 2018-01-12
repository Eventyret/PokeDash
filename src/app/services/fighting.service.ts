import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class FightingService {

  constructor(private http: Http) {}

  getBattleStatus() {
    return this.http.get("https://api.dehlin.info/api/1.1/tables/newPokemons/rows?limit=800").map(res => res.json());
  }
}
