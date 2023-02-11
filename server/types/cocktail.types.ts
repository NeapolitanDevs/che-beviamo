export interface CocktailInterface {
    id: number;

	name: string;

	base: string;

	ingredients: Array<string>;

    instructions: {};

	thumbnail?: string;
}