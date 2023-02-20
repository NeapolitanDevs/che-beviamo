export class Ingredientlass {
    id?: number;
	name: string;

    constructor(
        id: number,
        name: string
    ) {
        this.id = id;
        this.name = name;
    }
}

export interface IngredientInterface {
    id?: number;
	name: string;
}