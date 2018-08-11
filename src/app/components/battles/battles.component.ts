import { Component, OnInit, Input } from "@angular/core";
import { Battle } from "../shared/battle";
import * as _ from "lodash";
import { interval, timer } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
	selector: "app-battles",
	templateUrl: "./battles.component.html",
	styleUrls: ["./battles.component.scss"]
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
	countdownText = 0;
	randomColor: string;

	ngOnInit() {
		this.setBattleStatus(this.battleInput.isActive);
		this.Battles = _.castArray(this.battleInput);
		this.randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
	}

	setBattleStatus(isInBattle: boolean) {
		if (isInBattle) {
			this.fighting();
			setTimeout(() => {
				this.battleInput.isActive = true;
				this.color = "#5EE31C";
				this.buttonText = "Stop Fight";
				this.isLoading = false;
				this.countDown();
			}, 3000);
		} else {
			this.stopFighting();
			if (!this.firstBattle) {
				setTimeout(() => {
					this.battleInput.isActive = false;
					this.color = "#F62D14";
					this.buttonText = "Start Fight";
					this.isLoading = false;
				}, 3000);
			} else {
				setTimeout(() => {
					this.battleInput.isActive = false;
					this.color = "#F62D14";
					this.buttonText = "Fight Again";
					this.isLoading = false;
					this.combatDisplay = true;
				}, 3000);
			}
		}
	}

	fighting() {
		this.color = "#FFCB05";
		this.buttonText = "Starting Fight";
		this.isLoading = true;
		this.winners = [];
		this.combatDisplay = true;
	}
	stopFighting() {
		if (!this.firstBattle) {
			this.color = "#FFCB05";
			this.buttonText = "Stopping fight";
			this.isLoading = true;
			this.firstBattle = true;
			this.theWinner();
		} else {
			this.color = "#FFCB05";
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
			const winnerNumber = Math.floor(Math.random() * 10);
			console.log(battle);:
			if (winnerNumber >= 5) {
				this.winners.push(battle["pokemon1"]);
				this.winners.push(battle["sprite1"]);
			} else {
				this.winners.push(battle["pokemon2"]);
				this.winners.push(battle["sprite2"]);
			}
		});
		this.combatDisplay = false;
		this.stopFighting();
	}

	countDown() {
		// emit value every 1s
		const source = interval(1000);
		// after 5 seconds, emit value
		const timer$ = timer(7000);
		// when timer emits after 5s, complete source
		const example = source.takeUntil(timer$);
		// output: 0,1,2,3
		const subscribe = example.subscribe(
			val => {
				this.countdownText = val;
			},
			error => {
				console.log(error);
			},
			() => {
				this.theWinner();
			}
		);
	}
}
