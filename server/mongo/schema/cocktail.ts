import mongoose, { Schema } from 'mongoose';
import { CocktailInterface } from '../../types/cocktail.types';

const schema = new Schema<CocktailInterface>({
    id: {type: Number, required: true, unique: true},
    name: {type:  String, required: true},
    thumbnail: {type: String},
    ingredients: [String],
    measurements: [String],
    alcoholic: String,
    glass: String,
    instructions: {
        EN: String,
        IT: String
    }
});

const query = mongoose.model("Cocktail", schema);

const add = async (cocktail: CocktailInterface): Promise<void> => {
    try {
        const doc = new query(cocktail);
        await doc.save();
    } catch (error: unknown) {
        console.log(cocktail, "cocktail.ts:add()")
        console.log(JSON.stringify(error || ""), "cocktail.ts:add()");
    }
};

const exists = async (nameQuery: string): Promise<any> => {
    try {
        const cocktail = await query.exists({ name: {$regex : new RegExp(nameQuery, "i")} })
        return cocktail;
    } catch (error: unknown) {
        console.error(JSON.stringify(error || ""), "cocktail.ts:exists() catch ");
    }
};

const getByIngredient = async (ingredientQuery: string): Promise<Object> => {
    try {
        const cocktail = await query.find({ ingredients: {$regex : new RegExp(ingredientQuery, "i")} });
        return await cocktail || new query();
    } catch (error: unknown) {
        console.error(JSON.stringify(error || ""), "cocktail.ts:getByIngredient() catch ");
    }

    return new query();
};

const getByName = async (nameQuery: string): Promise<Object> => {
    try {
        const cocktail = await query.find({ name: {$regex : new RegExp(nameQuery, "i")} });
        return await cocktail || new query();
    } catch (error: unknown) {
        console.error(JSON.stringify(error || ""), "cocktail.ts:getByName() catch ");
    }

    return new query();
};

const getById = async (DrinkId: number): Promise<Object> => {
    try {
        const cocktail = await query.find({id: DrinkId});
        return await cocktail || new query();
    } catch (error: unknown) {
        console.error(JSON.stringify(error || ""), "cocktail.ts:getById() catch ");
    }

    return new query();
};

const getAll = async (): Promise<Object> => {
    try{
        const cocktails = await query.find();
        return await cocktails || [];
    } catch (error: unknown) {
        console.error(JSON.stringify(error || ""), "cocktail.ts:getAll() catch ");
    }

    return new query();
}

const getRandom = async (): Promise<Object> => {
    try {

        const randomCocktail = await query.count();

        const random = Math.floor(Math.random() * randomCocktail);

        const cocktails = await query.findOne().skip(random).exec();
        
        return await cocktails || new query();

    } catch (error: unknown) {
        console.error(JSON.stringify(error || ""), "cocktail.ts:getRandom() catch ");
    }

    return new query();
}


const getByMultipleIngredients = async (ingredientsQuery: string): Promise<Object> => {
    try {
        const ingredients = ingredientsQuery.split(",")

        const cocktails = await query.find({ ingredients: {$all: ingredients} });

        return cocktails || new query();
    } catch (error: unknown) {
        console.error(JSON.stringify(error || ""), "cocktail.ts:getByMultipleIngredients() catch ");
    }

    return new query();

}

const getMultipleRandom = async (numberOfDrinks: number): Promise<Object> => {
    try{
        const randomCocktail = await query.count();
        var cocktailsObject = []
        
        for (let i = 0; i < numberOfDrinks; i++) {
            const random = Math.floor(Math.random() * randomCocktail);
            const cocktails = await query.findOne().skip(random).exec();
            cocktailsObject.push(cocktails)
        } 
        
        
        return cocktailsObject || new query();
    } catch (error: unknown) {
        console.error(JSON.stringify(error || ""), "cocktail.ts:getMultipleRandom() catch ");
    }
    return new query();
}

const getRandomByIngredients = async (ingredientsQuery: string[]): Promise<Object> => {
    try{
        const randomCocktail = await query.find({ ingredients: {$all: ingredientsQuery} }).count();
        const random = Math.floor(Math.random() * randomCocktail);
        const cocktail = await query.findOne({ ingredients: {$all: ingredientsQuery} }).skip(random).exec();

        return cocktail || new query();
    } catch (error: unknown) {
        console.error(JSON.stringify(error || ""), "cocktail.ts:getRandomByIngredients() catch ");
    }

    return new query();
}


export { add, getByIngredient, getByMultipleIngredients, getByName, getById, getAll, getRandom, getMultipleRandom, getRandomByIngredients,  exists };
export default { add, getByIngredient, getByMultipleIngredients, getByName, getById, getAll, getRandom, getMultipleRandom, getRandomByIngredients, exists };
