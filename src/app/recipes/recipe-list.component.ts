import { Component, OnInit } from '@angular/core';

import { Recipe, IRecipe } from './recipe';
import { RecipeService } from './recipe.service';

@Component({
    selector: 'recipe-list',
    templateUrl: 'recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[];

    constructor(
        private recipeService: RecipeService) {
    }

    ngOnInit() { 
        this.getRecipes();
    }

    getRecipes() {
        this.recipeService.getRecipes()
            .subscribe((recipes) => this.recipes = recipes);
    }
}