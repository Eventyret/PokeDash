import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { NgxSpinnerModule } from "ngx-spinner";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BattlePageComponent } from "./pages/battle-page/battle-page.component";
import { BattleHelpComponent } from "./pages/battle-page/components/battle-help/battle-help.component";
import { BattlesComponent } from "./pages/battle-page/components/battles/battles.component";
import { BarChartComponent } from "./pages/dashboard/components/bar-chart/bar-chart.component";
import { AvgAttributesComponent } from "./pages/dashboard/components/modals/avg-attributes/avg-attributes.component";
import { PokemonTypesComponent } from "./pages/dashboard/components/modals/pokemon-types/pokemon-types.component";
import { PieChartComponent } from "./pages/dashboard/components/pie-chart/pie-chart.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { ListHelpComponent } from "./pages/pokemon-list/components/modals/list-help/list-help.component";
import { PokemonListComponent } from "./pages/pokemon-list/pokemon-list.component";
import { StartupComponent } from "./pages/startup/startup.component";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";
import { StartupHelpComponent } from "./shared/components/startup-help/startup-help.component";
import { PrimeengModule } from './shared/primeeng.module';


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
		StartupComponent,
	],
	imports: [
		BrowserModule,
		ChartsModule,
		HttpClientModule,
		FormsModule,
		NgxSpinnerModule,
		BrowserAnimationsModule,
		NgbModule,
		AppRoutingModule,
		PrimeengModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
