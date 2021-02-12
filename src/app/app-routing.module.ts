import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { BattlePageComponent } from "./pages/battle-page/battle-page.component";
import { BattleHelpComponent } from "./pages/battle-page/components/battle-help/battle-help.component";
import { AvgAttributesComponent } from "./pages/dashboard/components/modals/avg-attributes/avg-attributes.component";
import { PokemonTypesComponent } from "./pages/dashboard/components/modals/pokemon-types/pokemon-types.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { ListHelpComponent } from "./pages/pokemon-list/components/modals/list-help/list-help.component";
import { PokemonListComponent } from "./pages/pokemon-list/pokemon-list.component";
import { StartupComponent } from "./pages/startup/startup.component";
import { StartupHelpComponent } from "./shared/components/startup-help/startup-help.component";

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
	{ path: "**", component: PageNotFoundComponent },
];

@NgModule({
	declarations: [],
	imports: [CommonModule, RouterModule.forRoot(appRoutes)],
})
export class AppRoutingModule {}
