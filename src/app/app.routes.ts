import { ModuleWithProviders }         from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';

import { HomeComponent }               from './home.component';
import { IngredientComponent }         from './ingredients/ingredient.component';
import { IngredientFormComponent }         from './ingredients/ingredient-form.component';
import { AuthGuard }                   from './auth.guard';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ingredient', component: IngredientComponent, canActivate: [AuthGuard] },
  { path: 'ingredient/add', component: IngredientFormComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

export const appRoutingProviders: any[] = [
    AuthGuard
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);