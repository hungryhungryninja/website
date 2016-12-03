import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ButtonsModule } from 'ng2-bootstrap/ng2-bootstrap';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { IngredientData }  from './data/ingredient-data';

import { IngredientService } from './ingredients/ingredient.service'; 

import { AppComponent } from './app.component';
import { IngredientComponent } from './ingredients/ingredient.component';
import { IngredientListComponent } from './ingredients/ingredient-list.component';


@NgModule({
  declarations: [
    AppComponent,
    IngredientComponent,
    IngredientListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule,
    ButtonsModule//,
    //InMemoryWebApiModule.forRoot(IngredientData, {delay: 100,  rootPath: 'api/'})
  ],
  providers: [IngredientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
