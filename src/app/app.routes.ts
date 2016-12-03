import { ModuleWithProviders }         from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';

import { HomeComponent }               from './home.component';
import { IngredientComponent }         from './ingredients/ingredient.component';
import { RecipesComponent }            from './recipes/recipes.component';
import { RecipeComponent }            from './recipes/recipe.component';
import { AuthGuard }                   from './auth.guard';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ingredient', component: IngredientComponent, canActivate: [AuthGuard] },
  { path: 'recipes', component: RecipesComponent, canActivate: [AuthGuard] },
  { path: 'recipes/:id', component: RecipeComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

export const appRoutingProviders: any[] = [
    AuthGuard
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
