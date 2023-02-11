import express, { Request, Response } from "express";
import bodyparser from "body-parser";
import { add, get } from "../mongo/schema/cocktail";

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
      name: "Gin Tonic",
      base: "Gin",
      ingredients: ["Gin", "Tonic", "Gin", "Tonic", "Gin"],
      instructions: {
          EN: "Mix gin, Tonic, and gin together to make a gin tonic.",
          IT: "Mischia gin, Tonic, and gin together to make a gin tonic.",
      }
    }
    const cocktail = await add(cocktailObject);
    console.log("Cocktail: ", cocktail);
    res.json({status: 200, body: cocktail});
  });
  
  export { cocktailRouter }
  export default { cocktailRouter };