import { InMemoryDbService } from 'angular-in-memory-web-api';
export class RecipeData implements InMemoryDbService {
  createDb() {
    let recipes = [
      {
        id: '1',
        name: "Vegan Tikka Masala Curry with Eggplant, Red Kidney Beans and Zucchini/Courgette",
        cookTime: "PT30M",
        prepTime: "PT15M",
        cookingMethod: "",
        recipeCategory: "Main dish",
        recipeCuisine: "British Indian"
      },
      {
        id: '2',
        name: "Scott's World Famous Meatballs",
        cookTime: "PT30M",
        prepTime: "PT15M",
        cookingMethod: "",
        recipeCategory: "Main dish",
        recipeCuisine: "Italian American"
      }
    ];
    return { "recipes": recipes };
  }
}