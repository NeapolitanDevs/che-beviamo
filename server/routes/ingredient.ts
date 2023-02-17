import express, { Request, Response } from "express";
import bodyparser from "body-parser";
import { add, getByName, getAll } from "../mongo/schema/ingredients";

var ingredientRouter = express.Router();

ingredientRouter.get('/getName/:input', async function (req: Request,res: Response) {
  console.log('GET api/getName/:input');
  const nameQuery = req.params.input;
  const cocktail = await getByName(nameQuery);
  res.json({status: 200, body: cocktail});
});
  
ingredientRouter.get('/add/', async function (req: Request,res: Response) {
    console.log('GET api/add/:cocktail');
    const ingredientObject = [
      {
        id: 1,
        name: "Gin",
      },
      {
        id: 2,
        name: "Tonic Water",
      },
      {
        id: 3,
        name: "Lemon Peel",
      },
      {
        id: 4,
        name: "Ice",
      },
      {
        id: 5,
        name: "Lemon Juice",
      },
      {
        id: 6,
        name: "Vodka",
      },
      {
        id: 7,
        name: "Dry Vermouth",
      },
      {
        id: 8,
        name: "Olive",
      },
      {
        id: 9,
        name: "Coffee Liqueur",
      },
      {
        id: 10,
        name: "Light Cream",
      },
      {
        id: 11,
        name: "Peach Schnapps",
      },
      {
        id: 12,
        name: "Cranberry Juice",
      },
      {
        id: 13,
        name: "Orange Juice",
      },
      {
        id: 14,
        name: "Lime Juice",
      },
      {
        id: 15,
        name: "Ginger Ale",
      }
    ]
    try {
    ingredientObject.forEach(async function (ingredient){
      await add(ingredient);
    });
    } catch (error: unknown) {
      console.log(JSON.stringify(error || ""), "cocktail add");
    }
    res.json({status: 200});
  });

  ingredientRouter.get('/getAll', async function (req: Request,res:  Response) {
    console.log('GET api/getAll');
    const cocktail = await getAll();
    res.json({status: 200, body: cocktail});
  });

  export { ingredientRouter }
  export default { ingredientRouter };
