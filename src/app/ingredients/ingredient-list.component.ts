import { Component, OnInit } from '@angular/core';
import { IIngredient, Ingredient } from "./ingredient";
import { IngredientService } from "./ingredient.service";

@Component({
    selector: 'ingredient-list',
    templateUrl: 'ingredient-list.component.html'
})
export class IngredientListComponent implements OnInit {
    ingredients: Ingredient[];
    ingredient: any;
    isPersisted: boolean;

    constructor(private ingredientService: IngredientService) { }

    ngOnInit() {
        this.getIngredients();
    }

    getIngredients(){
        //this.ingredients = this.ingredientService.getIngredients();
        this.ingredientService.getIngredients()
            .subscribe(
                ingredients => this.ingredients = ingredients
            );
    }

    editIngredient(ingredient) {
        console.log("selected "+ingredient.name);
        this.ingredient = ingredient;
        this.isPersisted = true;
    }

    add(){
        let newIngredient = {id: null, name: ''};
        this.ingredient = new Ingredient(newIngredient);
        this.isPersisted = false;
    }
}