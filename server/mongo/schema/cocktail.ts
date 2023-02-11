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

const get = async (search: Object): Promise<Object> => {
    console.log(search, "SEARCH")
    try {
        const cocktail = await query.find(search);
        console.log("FindOne; ", cocktail);
        return await cocktail || new query();
    } catch (error: unknown) {
        console.error(JSON.stringify(error || ""), "cocktail.ts:get() catch ");
    }

    return new query();
};

export { add, get };
export default { add, get };
