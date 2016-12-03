export interface IIngredient{
    id: number;
    name: string;
}

export class Ingredient{
    id: number;
    name: string;
    constructor(properties: IIngredient){ }
}