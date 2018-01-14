import { Component, OnInit, Input } from "@angular/core";
import { Battle } from '../shared/battle';
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

  ngOnInit() {
    this.setBattleStatus(this.battleInput.isActive);
    this.Battles = _.castArray(this.battleInput)
    this.theWinner();
  }


  setBattleStatus(isInBattle: boolean) {
    if (isInBattle) {
      this.battleInput.isActive = true;
      this.color = "#66BB6A";
      this.buttonText = "Stop Fight";
    } else {
      this.battleInput.isActive = false;
      this.color = "#ff6b6b";
      this.buttonText = "Activate Fight";
    }
  }

  toggleStatus(battleStatus: boolean) {
    this.setBattleStatus(!battleStatus);
  }

    theWinner() {
    let winners = [];
    this.Battles.forEach(battle => {
      let winnerNumber = Math.floor(Math.random()  *10);
     if (winnerNumber  > 5) {
        winners.push(battle["pokemon1"]);
      } else {
        winners.push(battle["pokemon2"]);
      }
    });
  }
}
