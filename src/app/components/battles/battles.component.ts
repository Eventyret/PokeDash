import { Component, OnInit, Input } from '@angular/core';
import { Battle } from '../shared/battle';
import { map } from "rxjs/operator/map";



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
  winners: any[];

  ngOnInit() {
    this.setBattleStatus(this.battleInput.isActive);
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
}
