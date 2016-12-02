import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ButtonsModule } from 'ng2-bootstrap/ng2-bootstrap';

import { IngredientService } from './ingredients/ingredient.service'; 

import { AppComponent } from './app.component';
import { IngredientFormComponent } from './ingredients/ingredient-form.component';
import { IngredientListComponent } from './ingredients/ingredient-list.component';


@NgModule({
  declarations: [
    AppComponent,
    IngredientFormComponent,
    IngredientListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule,
    ButtonsModule
  ],
  providers: [IngredientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
