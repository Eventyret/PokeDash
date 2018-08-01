import { DashboardComponent } from "./app/sections/dashboard/dashboard.component";
import { PokemonListComponent } from "./app/sections/pokemon-list/pokemon-list.component";
import { Routes } from "@angular/router";
import { BattleStatusComponent } from "./app/sections/battle-status/battle-status.component";

export const appRoutes: Routes = [
	{path: "dashboard", component: DashboardComponent },
	{path: "list", component: PokemonListComponent },
	{path: "battle-status", component: BattleStatusComponent },

	{path: "", redirectTo: "/dashboard", pathMatch: "full"}
];
