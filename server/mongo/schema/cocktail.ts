import mongoose, { Schema } from 'mongoose';
import { CocktailInterface } from '../../types/cocktail.types';

const schema = new Schema<CocktailInterface>({
    id: {type: Number, required: true},
    name: {type:  String, required: true},
    thumbnail: {type: String},
    ingredients: [String],
    instructions: {
        EN: {type: String, required: true},
        IT: String
    }
});

const query = mongoose.model("Cocktail", schema);

const add = async (cocktail: CocktailInterface): Promise<void> => {
    try {
        const doc = new query(cocktail);
        await doc.save();
    } catch (error: unknown) {
        console.log(JSON.stringify(error || ""), "cocktail.ts:add()");
    }
};

const exists = async (nameQuery: string): Promise<any> => {
    try {
        const cocktail = await query.exists({ ingredients: {$regex : new RegExp(nameQuery, "i")} });
        console.log(cocktail);
        return false;
    } catch (error: unknown) {
        console.error(JSON.stringify(error || ""), "cocktail.ts:getByIngredient() catch ");
    }

    return false
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
        const cocktail = await query.find({ ingredients: {$regex : new RegExp(nameQuery, "i")} });
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
    var randomCocktail: number, cocktails;
    try {

        var randomCocktail = await query.count();

        var random = Math.floor(Math.random() * randomCocktail);

        cocktails = await query.findOne().skip(random).exec();
        
        return await cocktails || new query();

    } catch (error: unknown) {
        console.error(JSON.stringify(error || ""), "cocktail.ts:getRandom() catch ");
    }

    return new query();
}

export { add, getByIngredient, getByName, getById, getAll, getRandom, exists };
export default { add, getByIngredient, getByName, getById, getAll, getRandom, exists };
