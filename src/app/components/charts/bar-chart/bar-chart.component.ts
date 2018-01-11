import { PokemonDataService } from './../../../services/pokemon-data.service';
import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {


  constructor(private pokeService: PokemonDataService) { }
  pokemonLabels: string[];
  pokemonData: number[];
  public barChartData: any[] = [
    {data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]}
  ]
  public barChartLabels: string[] = this.pokemonLabels
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
      const count = _.countBy(data, "Type1")
      console.log(count)
      this.pokemonData = Object.keys(count).map(val => count[val]);
      console.log(this.pokemonData);
      let labels = Object.keys(count)
      this.barChartLabels = _.castArray(labels)
      console.log(this.pokemonLabels)

    })

  }
}
