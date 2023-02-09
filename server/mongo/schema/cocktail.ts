import mongoose, { Schema } from 'mongoose';
import { CocktailInterface } from '../../types/cocktail.types';

const schema = new Schema<CocktailInterface>({
    id: {Number, required: true, index: true},
    name: {String, required: true},
    thumbnail: {String},
    base: {String, required: true},
    ingredients: [],
    instructions: {
        EN: {String, required: true},
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

export { add };
export default { add };
