import { DashboardComponent } from './app/pages/dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { PokemonListComponent } from './app/pages/pokemon-list/pokemon-list.component';

export const appRoutes: Routes = [
	{path: '', component: DashboardComponent },
	{path: 'list', component: PokemonListComponent }
];
