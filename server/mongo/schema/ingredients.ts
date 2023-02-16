import mongoose, { Schema } from 'mongoose';
import { IngredientInterface } from '../../types/ingredient.types';

const schema = new Schema<IngredientInterface>({
    id: {type: Number, required: true},
    name: {type:  String, required: true}
});

const query = mongoose.model("Ingredient", schema);

const add = async (ingredient: IngredientInterface): Promise<void> => {
    try {
        const doc = new query(ingredient);
        await doc.save();
    } catch (error: unknown) {
        console.log(JSON.stringify(error || ""), "ingredient.ts:add()");
    }
};

const getByName = async (nameQuery: string): Promise<Object> => {
    try {
        const ingredient = await query.find({ ingredients: {$regex : new RegExp(nameQuery, "i")} });
        return await ingredient || new query();
    } catch (error: unknown) {
        console.error(JSON.stringify(error || ""), "ingredient.ts:getByName() catch ");
    }

    return new query();
};

const getAll = async (): Promise<Object> => {
    try{
        const cocktails = await query.find();
        return await cocktails || [];
    } catch (error: unknown) {
        console.error(JSON.stringify(error || ""), "ingredient.ts:getAll() catch ");
    }

    return new query();
}

export { add, getByName, getAll };
export default { add, getByName, getAll };
