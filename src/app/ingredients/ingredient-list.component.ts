import { Component, OnInit } from '@angular/core';
import { Ingredient } from "./ingredient";
import { IngredientService } from "./ingredient.service";

@Component({
    selector: 'ingredient-list',
    templateUrl: 'ingredient-list.component.html'
})
export class IngredientListComponent implements OnInit {
    ingredients: Ingredient[];
    selectedIngredient: any;

    constructor(private ingredientService: IngredientService) { }

    ngOnInit() { 
        this.ingredients = this.ingredientService.getIngredients();
    }

    editIngredient(ingredient) {
        console.log("selected "+ingredient.name);
        this.selectedIngredient = ingredient; 
    }
}