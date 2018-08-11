import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-pokemon-types",
  templateUrl: "./pokemon-types.component.html",
  styleUrls: ["./pokemon-types.component.scss"]
})
export class PokemonTypesComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
