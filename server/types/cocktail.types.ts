export interface CocktailInterface {
    id: number;

	name: string;

	ingredients: Array<string>;
	
	measurements: Array<string>;

    instructions: {};

	alcoholic: string;

	glass: string;

	thumbnail?: string;
}