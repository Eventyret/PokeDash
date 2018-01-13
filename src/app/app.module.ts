import { HttpModule } from '@angular/http';
import { PokemonDataService } from './services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './sections/dashboard/dashboard.component';
import { PokemonListComponent } from './sections/pokemon-list/pokemon-list.component';
import { appRoutes } from '../routes';

import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './components/charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/charts/pie-chart/pie-chart.component';
import { BattleStatusComponent } from './sections/battle-status/battle-status.component';
import { BattlesComponent } from './components/battles/battles.component';
import { PaginationComponent } from './components/pagination/pagination.component';

import { DataTableModule } from "angular2-datatable";
import { DataFilterPipe } from './components/shared/data-filter.pipe';
import { Ng2FilterPipeModule } from "ng2-filter-pipe";



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    PokemonListComponent,
    BarChartComponent,
    PieChartComponent,
    BattleStatusComponent,
    BattlesComponent,
    PaginationComponent,
    DataFilterPipe
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), ChartsModule, HttpModule, DataTableModule, FormsModule, Ng2FilterPipeModule],
  providers: [PokemonDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
