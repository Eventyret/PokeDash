import { Component, OnInit } from '@angular/core';
import { Pokemons } from '../../components/shared/pokemons'

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.css"]
})
export class PokemonListComponent implements OnInit {
  constructor() {}

  pokemons: Pokemons[] = [
    { id: 1, name: "Pokemon 1", japanese_name: "Pokemon Japanese" },
    { id: 2, name: "Pokemon 1", japanese_name: "Pokemon Japanese" },
    { id: 3, name: "Pokemon 1", japanese_name: "Pokemon Japanese" },
    { id: 4, name: "Pokemon 1", japanese_name: "Pokemon Japanese" },
    { id: 5, name: "Pokemon 1", japanese_name: "Pokemon Japanese" },
    { id: 6, name: "Pokemon 1", japanese_name: "Pokemon Japanese" },
    { id: 7, name: "Pokemon 1", japanese_name: "Pokemon Japanese" },
    { id: 8, name: "Pokemon 1", japanese_name: "Pokemon Japanese" },
    { id: 9, name: "Pokemon 1", japanese_name: "Pokemon Japanese" },
    { id: 10, name: "Pokemon 1", japanese_name: "Pokemon Japanese" }
  ];

  ngOnInit() {}
}
