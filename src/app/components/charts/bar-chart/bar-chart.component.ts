import { PokemonDataService } from './../../../services/pokemon-data.service';
import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";


// Mock Data
const SAMPLE: any[] = [
  { data: [216, 12, 45, 96, 47, 60, 98], label: "Pokemon Numbers" },
  { data: [22, 52, 45, 206, 347, 60, 98], label: "Q5" }
];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {


  constructor(private pokeService: PokemonDataService) { }

  public barChartData: any [] = SAMPLE;
  public barChartLabels: string[];
  public barChartType = 'bar';
  public barChartLegend = false;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  ngOnInit() {
    this.getLabels();
  }

  getLabels(){
    this.pokeService.getPokemons().subscribe(res => {
      const data = res.data;
      this.barChartLabels = _.uniq(_.map(data, "Type1"))
      console.log(this.barChartLabels);
    });

  }
}
