import { Component }  from '@angular/core';

@Component({
  selector: 'ingredient',
  template: `
    <button type="button" class="btn btn-primary">Ingredients</button>
    <ingredient-list></ingredient-list>
  `
})

export class IngredientComponent {
  constructor() {}
};

