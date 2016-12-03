import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ButtonsModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AUTH_PROVIDERS } from 'angular2-jwt';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { IngredientData }  from './data/ingredient-data';

import { IngredientService } from './ingredients/ingredient.service'; 
import { IngredientListComponent } from './ingredients/ingredient-list.component';
import { IngredientFormComponent } from './ingredients/ingredient-form.component';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { IngredientComponent } from './ingredients/ingredient.component';




import { routing,
         appRoutingProviders } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IngredientComponent,
    IngredientListComponent,
    IngredientFormComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule,
    ButtonsModule,
    //InMemoryWebApiModule.forRoot(IngredientData, {delay: 100,  rootPath: 'api/'})
    routing
  ],
  providers: [
        appRoutingProviders,
        AUTH_PROVIDERS,
        IngredientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
