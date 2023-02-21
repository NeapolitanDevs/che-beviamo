export class CocktailClass {
    id: number;
	name: string;
	ingredients: Array<string>;
    measurements: Array<string>;
    instructions: any;
    alcoholic: string;
	glass: string;
	thumbnail?: string;

    constructor(
        id: number,
        name: string,
        ingredients: Array<string>,
        measurements: Array<string>,
        instructions: {},
        alcoholic: string,
        glass: string,
        thumbnail?: string
    ) {
        this.id = id;
        this.name = name;
        this.ingredients = ingredients;
        this.measurements = measurements;
        this.instructions = instructions;
        this.alcoholic = alcoholic;
        this.glass = glass;
        this.thumbnail = thumbnail;
    }
}

export interface CocktailInterface {
    id: number;
	name: string;
	ingredients: Array<string>;
    measurements: Array<string>;
    instructions: any;
    alcoholic: string;
	glass: string;
	thumbnail?: string;
}