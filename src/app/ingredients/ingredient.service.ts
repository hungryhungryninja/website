import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient';
import { Http, Response } from '@angular/http';

@Injectable()
export class IngredientService {

    constructor(http: Http) { }

    getIngredients(): Ingredient[]{
        let ingredients: Ingredient[];
        ingredients =  [
            {id: 1, name: "Salt"},
            {id: 2, name: "Pepper"},
        ];
        return ingredients;
    }

}