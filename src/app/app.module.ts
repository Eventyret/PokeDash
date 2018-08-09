import { PokemonDataService } from "./services/data.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { DashboardComponent } from "./sections/dashboard/dashboard.component";
import { PokemonListComponent } from "./sections/pokemon-list/pokemon-list.component";
import { Routes } from "@angular/router";
import { ChartsModule } from "ng2-charts";
import { BarChartComponent } from "./components/charts/bar-chart/bar-chart.component";
import { PieChartComponent } from "./components/charts/pie-chart/pie-chart.component";
import { BattleStatusComponent } from "./sections/battle-status/battle-status.component";
import { BattlesComponent } from "./components/battles/battles.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DataTableModule } from "angular2-datatable";
import { FilterPipeModule } from "ngx-filter-pipe";
import { HttpClientModule } from "@angular/common/http";

export const appRoutes: Routes = [
	{ path: "dashboard", component: DashboardComponent },
	{ path: "list", component: PokemonListComponent },
	{ path: "battle-status", component: BattleStatusComponent },

	{ path: "", redirectTo: "/dashboard", pathMatch: "full" }
];

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
		BattlesComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes),
		ChartsModule,
		HttpClientModule,
		DataTableModule,
		FormsModule,
		FilterPipeModule,
		NgbModule.forRoot()
	],
	providers: [PokemonDataService],
	bootstrap: [AppComponent]
})
export class AppModule {}
