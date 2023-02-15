export class CocktailClass {
    id: number;
	name: string;
	base: string;
	ingredients: Array<string>;
    instructions: any;
	thumbnail?: string;

    constructor(
        id: number,
        name: string,
        base: string,
        ingredients: Array<string>,
        instructions: {},
        thumbnail?: string
    ) {
        this.id = id;
        this.name = name;
        this.base = base;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.thumbnail = thumbnail;
    }
}

export interface CocktailInterface {
    id: number;
	name: string;
	base: string;
	ingredients: Array<string>;
    instructions: any;
	thumbnail?: string;
}