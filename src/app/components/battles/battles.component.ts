import { Component, OnInit, Input } from '@angular/core';
import { Battle } from '../shared/battle';

@Component({
  selector: 'app-battles',
  templateUrl: './battles.component.html',
  styleUrls: ['./battles.component.css']
})
export class BattlesComponent implements OnInit {

  constructor() { }

  @Input() battleInput: Battle;
  @Input() battleNumber: number;

  ngOnInit() {
  }

}
