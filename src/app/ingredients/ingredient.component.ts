import { Component }  from '@angular/core';
import { Auth }       from '../auth.service';

@Component({
  selector: 'ingredient',
  template: `
    <button type="button" class="btn btn-primary">Ingredients</button>
    <ingredient-list></ingredient-list>
  `
})

export class IngredientComponent {
  constructor(private auth: Auth) {}
};

