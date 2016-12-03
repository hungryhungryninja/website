import { ModuleWithProviders }         from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';

import { HomeComponent }               from './home.component';
import { IngredientComponent }         from './ingredients/ingredient.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ingredient', component: IngredientComponent },
  { path: '**', redirectTo: '' }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
