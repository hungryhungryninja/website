import { InMemoryDbService } from 'angular-in-memory-web-api';
export class IngredientData implements InMemoryDbService {
  createDb() {
    let ingredients = [
      {"id": 1, "name": "Salt"},
      {"id": 2, "name": "Pepper"},
      {"id": 3, "name": "Garlic"},
      {"id": 4, "name": "Soy Sauce"},
      {"id": 5, "name": "Ketchup"},
      {"id": 6, "name": "Mustard"},
      {"id": 7, "name": "BBQ Sauce"},
      {"id": 8, "name": "Milk"},
      {"id": 9, "name": "Butter"},
      {"id": 10, "name": "Relish"}
    ];
    return { "ingredients": ingredients };
  }
}