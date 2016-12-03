import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

    constructor(
        private ingredientService: IngredientService,
        private router: Router) { }

    ngOnInit() {
        this.getIngredients();
    }

    getIngredients(){
        this.ingredientService.getIngredients()
            .subscribe(
                ingredients => this.ingredients = ingredients
            );
    }

    delete(ingredient){
        this.ingredientService.delete(ingredient)
            .subscribe((isSuccessful: boolean) => {
                //this.goToIngredients();
                this.getIngredients();//ghetto refresh list
            });
    }

    private goToIngredients() {
        this.router.navigate(['/ingredient']);
    }

}