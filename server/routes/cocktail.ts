import express, { Request, Response } from "express";
import bodyparser from "body-parser";
import { add, get, getAll } from "../mongo/schema/cocktail";

var cocktailRouter = express.Router();

cocktailRouter.get('/api/get/:base', async function (req: Request,res: Response) {
    console.log('GET api/get/:base');
    const cocktailBase = req.params.base;
    const cocktail = await get({base: cocktailBase});
    console.log("Cocktails: ", cocktail);
    res.json({status: 200, body: cocktail});
  });
  
cocktailRouter.get('/api/add/', async function (req: Request,res: Response) {
    console.log('GET api/add/:cocktail');
    const cocktailObject = {
      id: 123,
      name: "Vodka Tonic",
      base: "Vodka",
      ingredients: ["vodka", "Tonic", "vodka", "Tonic", "vodka"],
      instructions: {
          EN: "Mix vodka, Tonic, and vodka together to make a vodka tonic.",
          IT: "Mischia vodka, Tonic, and vodka together to make a vodka tonic.",
      }
    }
    const cocktail = await add(cocktailObject);
    console.log("Cocktail: ", cocktail);
    res.json({status: 200, body: cocktail});
  });

  cocktailRouter.get('/api/getAll', async function (req: Request,res:  Response) {
    console.log('GET api/getAll');
    const cocktail = await getAll();
    res.json({status: 200, body: cocktail});
  });
  
  export { cocktailRouter }
  export default { cocktailRouter };