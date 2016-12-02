import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from './ingredient';

@Component({
    selector: 'ingredient-edit',
    templateUrl: 'ingredient.component.html'
})
export class IngredientComponent implements OnInit {
    @Input() ingredient: Ingredient;

    constructor() { }

    ngOnInit() { }
}