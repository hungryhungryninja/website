import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from './ingredient';

@Component({
    selector: 'ingredient-form',
    templateUrl: 'ingredient-form.component.html'
})
export class IngredientFormComponent implements OnInit {
    @Input() ingredient: Ingredient;
    submitted = false;

    constructor() { }

    ngOnInit() { }

    onSubmit() {
        console.log("Im saved!"); 
        this.submitted = true; 
    }
}