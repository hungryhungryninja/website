import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ButtonsModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AUTH_PROVIDERS } from 'angular2-jwt';

import { IngredientService } from './ingredients/ingredient.service'; 

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { IngredientComponent } from './ingredients/ingredient.component';



import { routing,
         appRoutingProviders } from './app.routes';

import { IngredientFormComponent } from './ingredients/ingredient-form.component';
import { IngredientListComponent } from './ingredients/ingredient-list.component';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeComponent } from './recipes/recipe.component';
import { RecipeListComponent } from './recipes/recipe-list.component';

import { Auth } from './auth.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IngredientComponent,
    RecipesComponent,
    RecipeComponent,
    RecipeListComponent,
    IngredientFormComponent,
    IngredientListComponent
  ],
  providers: [
        appRoutingProviders,
        AUTH_PROVIDERS,
        Auth,
       IngredientService
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule,
    ButtonsModule,
    routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
