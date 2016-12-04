import { Component }  from '@angular/core';
import { Auth }       from '../auth.service';

@Component({
  selector: 'ingredient',
  template: `
    <ingredient-list></ingredient-list>
  `
})

export class IngredientComponent {
  constructor(private auth: Auth) {}
};

