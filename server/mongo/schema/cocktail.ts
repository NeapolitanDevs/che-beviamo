import mongoose, { Schema } from 'mongoose';
import { CocktailInterface } from '../../types/cocktail.types';

const schema = new Schema<CocktailInterface>({
    id: {type: Number, required: true},
    name: {type:  String, required: true},
    thumbnail: {type: String},
    base: {type: String, required: true},
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

const getByBase = async (base: Object): Promise<Object> => {
    try {
        const cocktail = await query.find(base);
        return await cocktail || new query();
    } catch (error: unknown) {
        console.error(JSON.stringify(error || ""), "cocktail.ts:getByBase() catch ");
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

export { add, getByBase, getById, getAll, getRandom };
export default { add, getByBase, getById, getAll, getRandom };
