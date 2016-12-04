import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth } from '../auth.service';

import { Recipe } from './recipe';
import { RecipeService } from './recipe.service';

//rxjs
import 'rxjs/add/operator/do'; 

@Component({
    selector: 'recipe',
    templateUrl: 'recipe.component.html'
})
export class RecipeComponent implements OnInit {
    private id: string;
    recipe: Recipe;

    constructor(
        private auth: Auth,
        private recipeService: RecipeService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.route
            .params
            .map(params => params['id'])
            .do(id => this.id = id)
            .subscribe(id => this.getRecipe());
     }

     private getRecipe() {
         this.recipeService.getRecipe(this.id)
            .subscribe((recipe) => this.recipe = recipe);
     }
}