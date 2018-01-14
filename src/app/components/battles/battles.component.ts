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
  combatDisplay = true;

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
      if (!this.firstBattle) {
        setTimeout(() => {
          this.battleInput.isActive = false;
          this.color = "#ff6b6b";
          this.buttonText = "Start Fight";
          this.isLoading = false;
        }, 3000);
      } else {
        setTimeout(() => {
          this.battleInput.isActive = false;
          this.color = "#ff6b6b";
          this.buttonText = "Fight Again";
          this.isLoading = false;
          this.combatDisplay = true;
        }, 3000);
      }
    }
  }

  fighting() {
    this.color = "#F8D030";
    this.buttonText = "Starting Fight";
    this.isLoading = true;
    this.winners = [];
    this.combatDisplay = true;
  }
  stopFighting() {
    if (!this.firstBattle) {
      this.color = "#F8D030";
      this.buttonText = "Stopping fight";
      this.isLoading = true;
      this.firstBattle = true;
      this.theWinner();
    } else {
      this.color = "#F8D030";
      this.buttonText = "Initializing...";
      this.firstBattle = false;
      this.isLoading = false;
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
    this.combatDisplay = false;
  }
}
