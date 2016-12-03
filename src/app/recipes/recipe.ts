export interface IMass {
    measurement: number;
    unitOfMeasure: string;
};

export class Mass implements IMass{
    measurement: number;
    unitOfMeasure: string;
};

export interface IRecipeIngredient{
    name: string;
    amount: Mass;
};

export class RecipeIngredient{
    name: string;
    amount: Mass;
} ;

export interface IRecipe {
    id:  number;
    name: string;
    cookTime: string;
    prepTime: string;
    recipeCategory: string;
    recipeCuisine: string;
    ingredients: RecipeIngredient[];
};

export class Recipe implements IRecipe{
    id: number;
    name: string;
    cookTime: string;
    prepTime: string;
    recipeCategory: string;
    recipeCuisine: string;
    ingredients: RecipeIngredient[];
    instructions: string[];
}