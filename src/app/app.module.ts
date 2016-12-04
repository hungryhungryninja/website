import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ButtonsModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AUTH_PROVIDERS } from 'angular2-jwt';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RecipeData }  from './data/recipe-data';

import { IngredientService } from './ingredients/ingredient.service'; 
import { IngredientListComponent } from './ingredients/ingredient-list.component';
import { IngredientFormComponent } from './ingredients/ingredient-form.component';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { IngredientComponent } from './ingredients/ingredient.component';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeComponent } from './recipes/recipe.component';
import { RecipeListComponent } from './recipes/recipe-list.component';
import { RecipeService } from './recipes/recipe.service';

import { routing,
         appRoutingProviders } from './app.routes';



import { Auth } from './auth.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IngredientComponent,
    RecipesComponent,
    RecipeComponent,
    RecipeListComponent,
    IngredientListComponent,
    IngredientFormComponent
  ],
  providers: [
    appRoutingProviders,
    AUTH_PROVIDERS,
    Auth,
    IngredientService,
    RecipeService   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule,
    ButtonsModule,
    InMemoryWebApiModule.forRoot(RecipeData, {delay: 100,  rootPath: 'api/', passThruUnknownUrl: true }),
    routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
