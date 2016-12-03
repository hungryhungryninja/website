import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from './ingredient';
import { IngredientService } from "./ingredient.service";

@Component({
    selector: 'ingredient',
    templateUrl: 'ingredient.component.html'
})
export class IngredientComponent implements OnInit {
    @Input() ingredient: Ingredient;
    @Input() isPersisted: boolean; //May not need isPersisted after submitting to API
    submitted = false;

    constructor(private ingredientService: IngredientService) { }

    ngOnInit() { }

    onSubmit(form) {
        console.dir(form);
        console.log("Im saved! New Name: "+form.value.name);
        this.ingredient.name = form.value.name;
        this.ingredient.id = form.value.id;
        this.submitted = true; 

        //submit to API
        if(this.ingredient.id == null){
            //create new ingredient
            //this.ingredientService
            this.ingredientService.add(this.ingredient)
                .subscribe((ingredient:Ingredient) => {
                    console.dir(ingredient);
                })
        }
        else{
            //update ingredient
            this.ingredientService.update(this.ingredient)
                .subscribe((res) => {
                    console.dir(res);
                },
                (error) => console.log(error));
        }

        form.reset();
    }


}