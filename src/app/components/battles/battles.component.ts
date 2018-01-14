import { Component, OnInit, Input } from "@angular/core";
import { Battle } from "../shared/battle";
import * as _ from "lodash";

@Component({
  selector: "app-battles",
  templateUrl: "./battles.component.html",
  styleUrls: ["./battles.component.css"]
})
export class BattlesComponent implements OnInit {
  constructor() {}

  color: string;
  buttonText: string;

  @Input() battleInput: Battle;
  @Input() battleNumber: number;
  Battles: any[];
  isLoading = false;
  firstBattle = true;
  winners = [];

  ngOnInit() {
    this.setBattleStatus(this.battleInput.isActive);
    this.Battles = _.castArray(this.battleInput);
  }

  setBattleStatus(isInBattle: boolean) {
    if (isInBattle) {
      this.fighting();
      setTimeout(() => {
        this.battleInput.isActive = true;
        this.color = "#66BB6A";
        this.buttonText = "Stop Fight";
        this.isLoading = false;
      }, 3000);
    } else {
      this.stopFighting();
      setTimeout(() => {
        this.battleInput.isActive = false;
        this.color = "#ff6b6b";
        this.buttonText = "Activate Fight";
        this.isLoading = false;
      }, 3000);
    }
  }

  fighting() {
    this.color = "#FFCA28";
    this.buttonText = "Fight in progress....";
    this.isLoading = true;
    this.winners = [];
  }
  stopFighting() {
    if (!this.firstBattle) {
      this.color = "#FFCA28";
      this.buttonText = "Checking Winner";
      this.isLoading = true;
      this.firstBattle = false;
      this.theWinner();
    } else {
      this.color = "#FFCA28";
      this.buttonText = "Getting Status";
      this.firstBattle = false;
      this.isLoading = true;
    }
  }

  toggleStatus(battleStatus: boolean) {
    this.setBattleStatus(!battleStatus);
  }

  theWinner() {
    this.Battles.forEach(battle => {
      let winnerNumber = Math.floor(Math.random() * 10);
      if (winnerNumber > 5) {
        this.winners.push(battle["pokemon1"]);
      } else {
        this.winners.push(battle["pokemon2"]);
      }
    });
  }
}
