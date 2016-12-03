import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Auth }       from '../auth.service';

import { Ingredient, IIngredient } from './ingredient';
import { IngredientService } from "./ingredient.service";

@Component({
    selector: 'ingredient-form',
    templateUrl: 'ingredient-form.component.html'
})
export class IngredientFormComponent implements OnInit {

    submitted = false;
    ingredient: Ingredient;

    constructor(
        private auth: Auth,
        private ingredientService: IngredientService,
        private router: Router) { }

    ngOnInit() { 
        let emptyIngredient: IIngredient = {name: ""};
        this.ingredient = new Ingredient(emptyIngredient);
    }

    onSubmit(form) {
        console.dir(form);
        console.log("Im saved! New Name: "+form.value.name);
        this.ingredient.name = form.value.name;
        this.submitted = true;
        
        //create new ingredient
        this.ingredientService.add(this.ingredient)
            .subscribe((isSuccessful: boolean) => {
                console.dir(`Added from service? ${isSuccessful}`);
            });
    
        this.gotoIngredients();
    }

    private gotoIngredients() {
        this.router.navigate(['/ingredient']);
    }


}