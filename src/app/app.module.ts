import { PokemonDataService } from "./services/data.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { PokemonListComponent } from "./pages/pokemon-list/pokemon-list.component";
import { Routes } from "@angular/router";
import { ChartsModule } from "ng2-charts";
import { BarChartComponent } from "./pages/dashboard/components/bar-chart/bar-chart.component";
import { PieChartComponent } from "./pages/dashboard/components/pie-chart/pie-chart.component";
import { BattlePageComponent } from "./pages/battle-page/battle-page.component";
import { BattlesComponent } from "./pages/battle-page/components/battles/battles.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DataTableModule } from "angular2-datatable";
import { HttpClientModule } from "@angular/common/http";
import { NgxSpinnerModule } from "ngx-spinner";
import { ListHelpComponent } from "./pages/pokemon-list/components/modals/list-help/list-help.component";
import { BattleHelpComponent } from "./pages/battle-page/components/battle-help/battle-help.component";
import { PokemonTypesComponent } from "./pages/dashboard/components/modals/pokemon-types/pokemon-types.component";
import { AvgAttributesComponent } from "./pages/dashboard/components/modals/avg-attributes/avg-attributes.component";
import { StartupHelpComponent } from "./shared/components/startup-help/startup-help.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { StartupComponent } from "./pages/startup/startup.component";
import { NgxPaginationModule } from "ngx-pagination";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";

export const appRoutes: Routes = [
	{ path: "", component: StartupComponent },
	{ path: "dashboard", component: DashboardComponent },
	{ path: "list", component: PokemonListComponent },
	{ path: "help/types", component: PokemonTypesComponent },
	{ path: "help/avg", component: AvgAttributesComponent },
	{ path: "help/list", component: ListHelpComponent },
	{ path: "help/battle", component: BattleHelpComponent },
	{ path: "help/startup", component: StartupHelpComponent },
	{ path: "battle", component: BattlePageComponent },
	{ path: "**", component: PageNotFoundComponent }
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
		BattlePageComponent,
		BattlesComponent,
		PokemonTypesComponent,
		AvgAttributesComponent,
		ListHelpComponent,
		BattleHelpComponent,
		StartupHelpComponent,
		PageNotFoundComponent,
		StartupComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes),
		ChartsModule,
		HttpClientModule,
		DataTableModule,
		FormsModule,
		NgbModule.forRoot(),
		NgxSpinnerModule,
		NgxPaginationModule,
		BrowserAnimationsModule,
		ToastrModule.forRoot()
	],
	providers: [PokemonDataService],
	bootstrap: [AppComponent]
})
export class AppModule {}
