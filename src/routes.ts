import { DashboardComponent } from './app/sections/dashboard/dashboard.component';
import { PokemonListComponent } from './app/sections/pokemon-list/pokemon-list.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
	{path: 'dashboard', component: DashboardComponent },
	{path: 'list', component: PokemonListComponent },

	{path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];
