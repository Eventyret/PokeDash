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
  public barChartData: any[] = [
    {data: this.barData, label: "Pokemon's"}
  ]
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
      const filterData = _.countBy(data, "Type1");
      Object.values(filterData);
      Object.keys(filterData);
      console.log(this.barChartData)
      console.log(this.barChartLabels)
    });

  }
}
