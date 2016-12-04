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
    id:  string;
    name: string;
    cookTime: string;
    prepTime: string;
    cookingMethod: string;
    recipeCategory: string;
    recipeCuisine: string;
    //ingredients: RecipeIngredient[];
    //instructions: string[];
};

export class Recipe{
    id: string;
    name: string;
    cookTime: string;
    prepTime: string;
    cookingMethod: string;
    recipeCategory: string;
    recipeCuisine: string;
    //ingredients: RecipeIngredient[];
    //instructions: string[];

    constructor(options: IRecipe){
        this.id = options.id;
        this.name = options.name;
        this.cookTime = options.cookTime;
        this.prepTime = options.prepTime;
        this.cookingMethod = options.cookingMethod;
        this.recipeCategory = options.recipeCategory;
        this.recipeCuisine = options.recipeCuisine;
    }
}